<template>
  <div class="app-container">
    <div class="filter-container">       
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
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
      <el-table-column :label="$t('serviceDetail.customer')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.customer }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.customer_telephone')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.customer_telephone }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.serviceName')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.charge_price')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.charge_price }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.goods_num')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.goods_num }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.goods_cost')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.goods_cost }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.inventory_profit')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.inventory_profit }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.inventory_percentage')" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.inventory_percentage }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('serviceDetail.inventoryer')" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.belongs_to_creater">{{scope.row.belongs_to_creater.nick_name}}</span>
          <span v-else></span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.date')" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.created_at | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" class-name="small-padding fixed-width">
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

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form 
        ref="dataForm" 
        :rules="rules" 
        :model="temp" 
        :inline="false"
        label-position="right" 
        label-width="100px" 
        style="margin-left:0px;margin-right: 60px;">
        <div class="createPost-main-container">
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('serviceDetail.serviceName')" align="center" prop="service_id">         
                <el-select v-model="temp.service_id" class="filter-item" filterable placeholder="输入业务搜索">
                  <el-option v-for="ser in allService" :key="ser.id" :label="ser.name" :value="ser.id"/>
                </el-select> 
              </el-form-item>
            </el-col>   
            <el-col :span="12">
              <el-form-item :label="$t('serviceDetail.charge_price')" prop="charge_price">
                <el-input v-model.number="temp.charge_price"   />
              </el-form-item>
            </el-col> 
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('serviceDetail.customer')" prop="customer">
                <el-input v-model="temp.customer"  />
              </el-form-item>
            </el-col>   
            <el-col :span="12">
              <el-form-item :label="$t('serviceDetail.customer_telephone')" prop="customer_telephone">
                <el-input v-model="temp.customer_telephone"  />
              </el-form-item>
            </el-col> 
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item :label="$t('serviceDetail.goodsList')">
              <div style="float:left;" v-model="temp.goodsIdList" v-for="(goods, goods_index) in temp.goodsIdList" :key="goods_index" >
                <el-col :span="12">
                  <el-select style="margin-bottom:5px;" v-model="goods.goodsId" class="filter-item" filterable placeholder="输入商品搜索">
                      <el-option v-for="goo in allGoods" :key="goo.id" :label="goo.name" :value="goo.id"/>
                  </el-select>
                </el-col>
                <el-col :span="9">
                  <!-- <el-input style="margin-bottom:5px;" placeholder="数量" v-model="goods.num"/> -->
                  <el-input-number 
                    v-model="goods.num" 
                    size="small" 
                    style="margin-bottom:5px;" 
                    :min="1" 
                    :max="100" 
                    label="数量">
                  </el-input-number>
                </el-col>
                <el-col :span="2">
                  <el-button 
                    v-if="goods.add" 
                    @click="goodsAdd" 
                    style="margin-left:5px;" 
                    type="success" >
                    {{ $t('serviceDetail.goodsAdd') }}
                  </el-button>
                  <el-button 
                    v-else  
                    @click="goodsRemove($event)" 
                    style="margin-left:5px;" 
                    type="danger" 
                    :dataIndex="goods_index">
                    {{ $t('serviceDetail.goodsRemove') }}
                  </el-button>
                </el-col>
              </div>
            </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('serviceDetail.charge_price')" prop="charge_price">
                <el-input v-model.number="temp.charge_price"   />
              </el-form-item>
            </el-col>   
            <el-col :span="12">
              <el-form-item :label="$t('serviceDetail.remark')">
                <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.remark" type="textarea" placeholder="备注"/>
              </el-form-item>
            </el-col> 
          </el-row>
        </div>       
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{ $t('table.confirm') }}</el-button>
        <el-button v-else type="primary" @click="updateData">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog>
    <el-dialog  :visible.sync="dialogInfoVisible">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark self-style"><span>套餐详情</span></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple self-style">
          {{ $t('serviceDetail.serviceName') }}:<span>{{temp.name}}</span></div>
        </el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light self-style">
          {{ $t('serviceDetail.customer') }}:<span>{{temp.customer}}元</span>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light self-style">
          {{ $t('serviceDetail.goods_num') }}:<span>{{temp.goods_num}}</span>
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple self-style">
          {{ $t('table.date') }}:<span>{{temp.created_at | parseTime('{y}-{m}-{d}') }}</span>
        </div></el-col>    
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple self-style">
          {{ $t('serviceDetail.remark') }}:<span>{{temp.remark}}</span></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark self-style"><span>返还标准</span></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6" v-for="(month, group_index) in temp.return_moon_price_list" :key="month.key"><div class="grid-content bg-purple self-style">
          第{{ month.key }}月:<span>{{month.price}}元</span></div>
        </el-col>
      </el-row>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>

import { goodsAll } from '@/api/goods'
import { serviceAll } from '@/api/service'
import { serviceDetailList, createServiceDetail, getServiceDetail, updateServiceDetail, deleteServiceDetail } from '@/api/serviceDetail'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'

const calendarTypeOptions = [
  { key: 'web', display_name: 'web' },
  { key: 'api', display_name: 'api' },
]

// arr to obj ,such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'serviceDetail',
  directives: {
    waves
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    const validateReturnMonthPrice = (rule, value, callback) => { /*密码确认校验*/
      console.log(value)
      return false
    };
    return {
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
      },
      calendarTypeOptions,
      showReviewer: false,
      temp: {
        id: undefined,
        serviceName: '',
        service_id: '',
        customer: '',
        customer_telephone: '',
        charge_price: '',
        goodsIdList: [
          {goodsId:'', num: '1',  add: true}, 
        ],
        remark: '',
      },
      dialogFormVisible: false,
      dialogInfoVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '新增'
      },
      allGoods: [],
      allService: [],
      rules: {
        customer: [
          { required: true, message: '请输入套餐价格' },
          { type: 'number',  message: '价格应为数字' },
        ],
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        goods_num: [{ required: true, message: '请选择返款期数', trigger: 'blur' }],
        /*return_month_price: [
          { required: true, message: '请输入金额', trigger: 'blur' }, 
        ]*/
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  mounted(){
    this.getAllGoods()
    this.getAllService()
  },
  methods: {
    getList() {
      this.listLoading = true
      serviceDetailList(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    goodsAdd(){ //添加礼品
        let newGoods = {goodsId:'', num: '1', add: false}
        this.temp.goodsIdList.push(newGoods)
    },
    goodsRemove(event){ //删除副卡
      this.temp.goodsIdList.splice(event.currentTarget.getAttribute('dataIndex'),1)
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
    getAllGoods() {
      goodsAll().then(response => {
        /*console.log(response.data.data)
        return false*/
        this.allGoods = response.data.data
      })
    },
    getAllService() {
      serviceAll().then(response => {
        /*console.log(response.data.data)
        return false*/
        this.allService = response.data.data
      })
    },
    handleModifyStatus(row, status) {
      this.$confirm('确定要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.temp = Object.assign({}, row)
        deleteServiceDetail(this.temp).then((response) => {
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
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        serviceName: '',
        service_id: '',
        customer: '',
        customer_telephone: '',
        charge_price: '',
        goodsIdList: [
          {goodsId:'', num: '1',  add: true}, 
        ],
        remark: '',
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createServiceDetail(this.temp).then((response) => {
          //console.log(response.data.data);
          // console.log(this.temp)
          //return false
            if(response.data.status){
              let goodsData = response.data.data

              // goodsData.is_food = goodsData.is_food
              /*let newGoods = {
                id: goodsData.id,
                month_nums: goodsData.month_nums,
                package_price: goodsData.package_price,
                created_at: new Date()
              }*/
              /*this.temp.id = response.data.data.scalar.id
              this.temp.created_at = response.data.data.scalar.created_at | parseTime('{y}-{m}-{d}')*/
              this.list.unshift(goodsData)
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: response.data.message,
                type: 'success',
                duration: 2000
              })
            }else{
              this.$notify.error({
                title: '失败',
                message: response.data.message,
                duration: 2000
              })
            }           
          })
        }
      })
    },
    handleShow(row) {
      // console.log(row.has_many_serviceDetail_info)
      getServiceDetail(row).then((response) => {
        row.return_moon_price_list = []
        Array.prototype.forEach.call(response.data.data.has_many_serviceDetail_info, child => {
          //console.log(child.return_month)
          //console.log(child.return_price)
          let obj = {key:child.return_month,price:parseFloat(child.return_price)} 
          row.return_moon_price_list.unshift(obj)
        })  
        this.temp = Object.assign({}, row) // copy obj
        console.log(this.temp)
        this.dialogInfoVisible = true       
      })   
    },
    handleUpdate(row) {
      // console.log(row.has_many_serviceDetail_info)
      getServiceDetail(row).then((response) => {
        row.return_moon_price_list = []
        Array.prototype.forEach.call(response.data.data.has_many_serviceDetail_info, child => {
          //console.log(child.return_month)
          //console.log(child.return_price)
          let obj = {key:child.return_month,price:parseFloat(child.return_price)} 
          row.return_moon_price_list.unshift(obj)
        })  
        this.temp = Object.assign({}, row) // copy obj
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })        
      })   
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {        
          const tempData = Object.assign({}, this.temp)
          this.return_moon_price = true
          const parent = this.temp.return_moon_price_list
          const regex = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/ //验证数字
          // console.log(parent);
          Array.prototype.forEach.call(parent, child => {
            if(!regex.test(child.price)){
              //console.log(child.key)
              //console.log(child.price)
              this.return_moon_price = false
            }
            /*console.log(child.key)
            console.log(child.price)
            console.log(!child.price)
            console.log(typeof child.price === "undefined")
            console.log(child.price === '')
            console.log(child.price === 0)
            if((!child.price) || (typeof child.price === "undefined") || (child.price === '') || (child.price === 0)){
              this.return_moon_price = false
            }*/
          });
          // console.log(tempData)
          if(this.return_moon_price){
            updateServiceDetail(tempData).then((response) => {
              // console.log(response)
              if(response.data.status){
                for (const v of this.list) {
                  if (v.id === this.temp.id) {
                    const index = this.list.indexOf(v)
                    this.list.splice(index, 1, this.temp)
                    break
                  }
                }
                this.dialogFormVisible = false
                this.$notify({
                  title: '成功',
                  message: '更新成功',
                  type: 'success',
                  duration: 2000
                })
              }else{
                this.$notify.error({
                  title: '失败',
                  message: response.data.message,
                  duration: 2000
                })
              }              
           })
          }else{
            this.$notify.error({
              title: '注意',
              message: '请填写返还金额(金额应为数字)',
              duration: 2000
            })
          }      
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
  }
}
</script>
<style type="sass" scop>
  /* .fixed-width .el-button--mini {
    padding: 10px 3px;
    width: 70px;
    margin-left: 0px;
  }
  .el-table--medium td, .el-table--medium th {
    padding: 7px 0;
  }  */
  .el-dialog__body {
    padding: 15px 15px;
  }
  .el-dialog__header {
     padding-top: 10px; 
  }
  .el-row {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .self-style{
    text-align: -webkit-center;
    font-size: 20px;
    padding: 10px 0px;
  }
</style>