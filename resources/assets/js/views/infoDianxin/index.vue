<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input 
        :placeholder="$t('infoDianxin.return_telephone')"
        clearable 
        v-model="listQuery.selectTelephone"
        style="width: 150px;" 
        class="filter-item">
      </el-input>
      <el-select style="width:100px;" clearable v-model="listQuery.netin_year" class="filter-item" placeholder="入网年">
        <el-option v-for="year in package_year" :key="year.key" :label="year.year" :value="year.year"/>
      </el-select>
      <el-select style="width:100px;" clearable v-model="listQuery.netin_month" class="filter-item" placeholder="入网月">
        <el-option v-for="month in package_month" :key="month.key" :label="month.month" :value="month.month"/>
      </el-select>
      <el-select v-if="isAdmin" style="width:100px;" :placeholder="$t('info.status')" clearable v-model="listQuery.status" class="filter-item">
        <el-option v-for="(item, key, index) in statusMap" :key="item" :label="item" :value="key"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
      <el-tooltip class="item" effect="dark" content="注意:默认只导出当月信息,如需导出其他月,请选择筛选条件" placement="top">
        <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
      </el-tooltip>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('table.add') }}</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;">
      <el-table-column :label="$t('table.id')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('infoDianxin.return_telephone')" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.return_telephone }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('infoDianxin.refunds')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.refunds }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('infoDianxin.balance_month')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.balance_month }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column :label="$t('infoDianxin.netin')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.netin }}</span>
        </template>
      </el-table-column> -->
      <el-table-column :label="$t('infoDianxin.name')" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('infoDianxin.netin')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.netin || '' }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="isAdmin" :label="$t('infoDianxin.status')" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ statusMap[scope.row.status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('infoDianxin.import')" width="150px" align="center">
        <template slot-scope="scope">
          <span>
            {{ scope.row.created_at | parseTime('{y}-{m}-{d}') }}
            |
            <!-- {{ scope.row.belongs_to_creater ? scope.row.belongs_to_creater.nick_name : '' }} -->
            <span v-if="scope.row.belongs_to_creater">{{scope.row.belongs_to_creater.nick_name}}</span>
            <span v-else></span>
          </span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success" size="mini" @click="handleShow(scope.row)">{{ $t('table.show') }}</el-button>
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">{{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :total="total" background layout="total, prev, pager, next"  @current-change="handleCurrentChange"/>
    </div>
    <form-info ref="formInfoChild" v-bind:infoSelfList="this.list" v-on:addNewInfo="addList($event)"></form-info>
    <show-info ref="showInfoChild" ></show-info>
  </div>
</template>

<script>
import { infoDianxinList, deleteInfoDianxin } from '@/api/infoDianxin'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'
import { isTelephone } from '@/utils/validate'
import  ShowInfo  from './components/ShowInfo'
import FormInfo from './components/FormInfo'
import { export_table_to_excel, export_json_to_excel } from '@/vendor/Export2Excel.js'
import { infoDianxinStatus, package_year ,package_month }  from '@/config.js'

export default {
  name: 'infoSelfList',
  components: { FormInfo, ShowInfo },
  directives: {
    waves
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        2: 'success',
        1: 'danger'
      }
      return statusMap[status]
    },
    jituanStatusFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {  
    return {
      temp:{},
      tableKey: 0,
      list: null,
      listExport: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        withNoPage: false,
        netin_month: '',
        netin_year: '',
        selectTelephone: '',
        status: '',
      },
      isAdmin: false,
      package_year:package_year,
      package_month:package_month,
      statusMap: infoDianxinStatus,
      downloadLoading: false
    }
  },
  
  created() {
    Promise.all([
      this.getList(),
      this.isAdminOrManager(),
      // console.log(this.$store.getters.roles)
    ])
  },
  methods: {
    getList() {
      this.listLoading = true
      infoDianxinList(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    isAdminOrManager() {
      let userRole = this.$store.getters.roles
      //console.log(userRole.indexOf('admin'))
      //console.log(userRole.indexOf('manager'))
      if((userRole.indexOf('admin') >= 0) || (indexOf('manager') >= 0)){
        this.isAdmin = true
      }
    
    },
    addList(newInfo){
      // console.log(newInfo)
      if(newInfo.update){
        for (const v of this.list) {
          if (v.id === newInfo.id) {
            const index = this.list.indexOf(v)
            this.list.splice(index, 1, newInfo)
            break
          }
        }
      }else{
        this.list.unshift(newInfo)
      }   
    },
    handleDownload() {
      // this.handleFilter()
      this.downloadLoading = true
      
      if(this.listQuery.netin_year == '' && 
          this.listQuery.netin_month == '' &&
          this.listQuery.selectTelephone == ''  &&
          this.listQuery.status == '' &&
          this.listQuery.creater == ''){ //没有任何搜索条件
        if(this.listQuery.netin_year == ''){
          this.listQuery.netin_year = new Date().getFullYear()
        } 
        if(this.listQuery.netin_month == ''){
          this.listQuery.netin_month = new Date().getMonth()+1
        }
      }    
      console.log(this.listQuery)
      // return false
      this.listQuery.withNoPage = true
      infoDianxinList(this.listQuery).then(response => {
        this.listExport = response.data.data
        // console.log(this.listExport)
        // return false
        /*Array.prototype.forEach.call(this.listExport, child => {
          // console.log(child)
          if(child.side_number !== ''){
            let side_arr     = child.side_number.split("|")
            let side_uim_arr = child.side_uim_number.split("|")
            child.side_info    = ''
  
            //side_arr     = row.side_number.split("|")
            //side_uim_arr = row.side_uim_number.split("|")
  
            //console.log(side_arr)
            //console.log(side_uim_arr)
  
            Array.prototype.forEach.call(side_arr, (side, index) => {
              //console.log(index)
              //console.log(side)
              let s_info = side + '(' + side_uim_arr[index] + ')' + "\r\n"
              child.side_info +=  s_info
            })
            // child.side_info = child.side_info.substr(1,child.side_info.length-2);slice(start,[end])
            // console.log(child.side_info)
            child.side_info = child.side_info.slice(0,child.side_info.length-2)
          }
          

          //console.log(this.listExport)
          child.date      = child.created_at.slice(0,10)
          child.isJituan = this.jiTuanStatusMap[child.is_jituan]
          child.oldBind  = this.oldBindStatusMap[child.old_bind]
          child.packageName  = child.has_one_package.name
          child.collectionsType  = this.collectionsTypeMap[child.collections_type]
          child.creater  = child.belongs_to_creater.nick_name

        })*/
        const tHeader  = ['套餐名称','返款号码','集团名称','返款金额','价款', '结算月', '客户经理', '佣金方案', '返还日期']
        const filterVal = ['name','return_telephone','jituan','refunds','jiakuan', 'balance_month', 'manager', 'yongjin', 'netin']
        const data = this.formatJson(filterVal, this.listExport)
        // console.log(data)
        // return false
        const tableName = '电信信息表'
        export_json_to_excel({
          header: tHeader,
          data,
          filename: tableName
        })
        this.downloadLoading = false
      })
      
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    handleFilter() {
      // console.log(this.listQuery)
      // return false
      this.listQuery.page = 1
      this.listQuery.withNoPage = false
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.listQuery.withNoPage = false
      // console.log(this.listQuery)
      // return false
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$confirm('确定要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.temp = Object.assign({}, row)
        deleteInfo(this.temp).then((response) => {
          // console.log(response.data);
          if(response.data.status === 0){
            this.$notify({
              title: '失败',
              message: '删除失败',
              type: 'warning',
              duration: 2000
            })
          }else{
            const index = this.list.indexOf(row)
            this.list.splice(index, 1)
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success',
              duration: 2000
            })
          }   
        })
      }).catch((err) => {
        console.log(err)
        /*switch (error.response.status) {
          case 422:
            
          break
        }*/
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    handleCreate() { 
      this.$refs.formInfoChild.handleCreateInfo() 
    },
    handleUpdate(row) {  
      this.$refs.formInfoChild.handleUpdateInfo(row) 
    },
    handleShow(row) {
      this.$refs.showInfoChild.handleShowInfo(row)
    },   
  }
}
</script>
<style type="sass" scop>
  /* .fixed-width .el-button--mini {
    padding: 10px 3px;
    width: 70px;
    margin-left: 0px;
  } */
</style>