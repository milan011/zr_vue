<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
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
      <el-table-column :label="$t('info.project_name')" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.project_name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.new_telephone')" align="center" min-width="120%">
        <template slot-scope="scope">
          <span>{{ scope.row.new_telephone }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.side_number_num')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.side_number_num }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.is_jituan')" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.is_jituan | jituanStatusFilter">{{ jiTuanStatusMap[scope.row.is_jituan]}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.package')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.project_name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.name')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.user_telephone')" align="center" min-width="120%">
        <template slot-scope="scope">
          <span>{{ scope.row.user_telephone }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.netin')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.netin }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('info.status')" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ statusMap[scope.row.status] }}</el-tag>
          <!-- <span>{{ scope.row.status }}</span> -->
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.date')" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.created_at | parseTime('{y}-{m}-{d}') }}|{{ scope.row.belongs_to_creater.nick_name }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column :label="$t('table.title')" min-width="150px">
        <template slot-scope="scope">
          <span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.title }}</span>
          <el-tag>{{ scope.row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.author')" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showReviewer" :label="$t('table.reviewer')" width="110px" align="center">
        <template slot-scope="scope">
          <span style="color:red;">{{ scope.row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.importance')" width="80px">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon"/>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.readings')" align="center" width="95">
        <template slot-scope="scope">
          <span v-if="scope.row.pageviews" class="link-type" @click="handleFetchPv(scope.row.pageviews)">{{ scope.row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.status')" class-name="status-col" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column> -->
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

    <!-- <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item :label="$t('table.type')" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date"/>
        </el-form-item>
        <el-form-item :label="$t('user.name')" prop="name">
          <el-input :disabled="userNameDisabled" v-model="temp.name"/>
        </el-form-item>
        <el-form-item :label="$t('user.nick_name')" prop="nick_name">
          <el-input v-model="temp.nick_name"/>
        </el-form-item>
        <el-form-item v-show="passwordVisible" :label="$t('user.password')" :prop="password">
          <el-input :type="passwordType" v-model="temp.password"/>
        </el-form-item>
        <el-form-item v-show="passwordVisible" :label="$t('user.passwordRepeat')" :prop="password_confirmation">
          <el-input :type="passwordType" v-model="temp.password_confirmation"/>
        </el-form-item>
        <el-form-item :label="$t('user.telephone')" prop="telephone">
          <el-input v-model="temp.telephone"/>
        </el-form-item>
        <el-form-item :label="$t('user.email')" prop="email">
          <el-input v-model="temp.email"/>
        </el-form-item>
        <el-form-item :label="$t('user.remark')">
          <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.remark" type="textarea" placeholder="备注"/>
        </el-form-item>
        <el-form-item :label="$t('user.wx_number')" prop="wx_number">
          <el-input v-model="temp.wx_number"/>
        </el-form-item>
        <el-form-item :label="$t('user.status')">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('user.importance')">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;"/>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{ $t('table.confirm') }}</el-button>
        <el-button v-else type="primary" @click="updateData">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog> -->
    <form-info ref="formInfoChild"></form-info>

  </div>
</template>

<script>
import { infoList } from '@/api/infoSelf'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'
import { isTelephone } from '@/utils/validate'
import  SetRoles  from './components/SetRoles'
import FormInfo from './components/FormInfo'
import  { infoSelfStatus ,jituanStatus }  from '@/config.js'


export default {
  name: 'infoSelfList',
  components: { FormInfo },
  directives: {
    waves
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        3: 'success',
        2: 'info',
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
    const validateRepeatPass = (rule, value, callback) => { /*密码确认校验*/
      // console.log(value)
      if (value !== this.temp.password) {
          callback(new Error('两次输入密码不一致!'));
      } else {
          callback();
      }
    };
    const validateTelephone = (rule, value, callback) => {
      if (!isTelephone(value)) {
        callback(new Error('请输入正确格式手机号'))
      } else {
        callback()
      }
    }
    return {
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1
      },
      // calendarTypeOptions,
      // statusOptions: ['published', 'draft', 'deleted'],
      // showReviewer: false,
      /*temp: {
        id: undefined,
        name: null,
        nick_name: null,
        remark: '',
        password: '',
        password_confirmation: '',
        email: '',
        telephone: ''
      },*/
      /*password: 'password',
      password_confirmation: 'password_confirmation',
      passwordType: 'password',
      dialogFormVisible: false,
      passwordVisible: true,
      dialogStatus: '',
      userNameDisabled: 'false',*/
      /*textMap: {
        update: '用户编辑',
        create: '用户创建'
      },*/
      // statusMap: zrConfig.infoSelfStatus,
      statusMap: infoSelfStatus,
      jiTuanStatusMap: jituanStatus,
      // jiTuanStatusMap: zrConfig.jituanStatus,
      // dialogPvVisible: false,
      // pvData: [],
      /*rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'change' }],
        nick_name: [{ required: true, message: '请输入昵称', trigger: 'change' }],
        password: [{ required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 16, message: '密码长度必须是6-16位', trigger: 'change' }
        ],
        password_confirmation: [
          { required: true, message: '请确认密码', trigger: 'change' },
          { min: 6, max: 16, message: '密码长度必须是6-16位', trigger: 'change' },
          { validator: validateRepeatPass, trigger: 'change' }
        ],
        email: [{ type: 'email', required: true, message: '请输入正确格式的邮箱', trigger: 'change' }],
        telephone: [
          { required: true, message: '请输入有效手机号', trigger: 'blur' }, 
          { validator: validateTelephone, trigger: 'change' }     
        ]
      },*/
      // downloadLoading: false
    }
  },
  
  created() {
    Promise.all([
      this.getList(),
      // this.statusMap = infoSelfStatus
      // console.log(zrConfig),
      // console.log(infoSelfStatus)
    ])
  },
  methods: {
    getList() {
      this.listLoading = true
      infoList(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleShow(row) {
      console.log('hehe')
      /*getPackage(row).then((response) => {
        row.return_moon_price_list = []
        Array.prototype.forEach.call(response.data.data.has_many_package_info, child => {
          //console.log(child.return_month)
          //console.log(child.return_price)
          let obj = {key:child.return_month,price:parseFloat(child.return_price)} 
          row.return_moon_price_list.unshift(obj)
        })  
        this.temp = Object.assign({}, row) // copy obj
        console.log(this.temp)
        this.dialogInfoVisible = true       
      }) */  
    },
    handleModifyStatus(row, status) {
      this.$confirm('确定要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.temp = Object.assign({}, row)
        deleteUser(this.temp).then((response) => {
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
    /*resetTemp() {
      this.temp = {
        id: undefined,
        name: 'wxm',
        nick_name: 'wxm',
        remark: '闺女',
        password: '111111',
        password_confirmation : '111111',
        email: '',
        telephone: '13731080174'
      }
      this.temp = {
        id: undefined,
        name: null,
        nick_name: null,
        remark: '',
        password: '',
        password_confirmation : '',
        email: '',
        telephone: ''
      }
    },*/
    handleCreate() { 
      this.$refs.formInfoChild.handleCreateInfo() 
    },
    handleUpdate(row) {  
      this.$refs.formInfoChild.handleUpdateInfo(row) 
    },
    /*handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.userNameDisabled = false
      this.passwordVisible = true
      this.dialogFormVisible = true
      this.password = 'password'
      this.password_confirmation = 'password_confirmation'
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },*/
    
    /*handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.userNameDisabled = true
      this.password = null
      this.password_confirmation = null
      this.passwordVisible = false
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },*/
    
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