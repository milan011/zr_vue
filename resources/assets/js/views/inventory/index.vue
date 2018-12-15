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
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;">
      <el-table-column :label="$t('table.id')" width="60%" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('inventory.goodsName')" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.belongs_to_goods">{{scope.row.belongs_to_goods.name}}</span>
            <span v-else></span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('inventory.inventoryNow')" show-overflow-tooltip align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.inventory_now }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success" size="mini" @click="handleCreate(scope.row)">{{ $t('table.add') }}</el-button>
          <!-- <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">{{ $t('table.delete') }}
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination v-show="total>0" :current-page="listQuery.page" :total="total" background layout="total, prev, pager, next"  @current-change="handleCurrentChange"/>
    </div>

    <el-dialog title="添加库存" :visible.sync="dialogFormVisible">
      <!-- <el-form 
        ref="dataForm" 
        :rules="rules" 
        :model="temp" 
        :inline="true"
        label-position="right" 
        label-width="100px" 
        style="width: 100%;">
        <el-form-item :label="$t('goods.name')" prop="goods_name">
          <el-input v-model="temp.goods_name"/>
        </el-form-item>
        <el-form-item :label="$t('goods.brand')" prop="brand">
          <el-input v-model="temp.brand"/>
        </el-form-item>
        <el-form-item :label="$t('goods.goods_from')" prop="goods_from">
          <el-input v-model="temp.goods_from"/>
        </el-form-item>
        <el-form-item :label="$t('goods.type')" prop="type">
          <el-input v-model="temp.type"/>
        </el-form-item>
        <el-form-item :label="$t('goods.bottom_price')" prop="bottom_price">
          <el-input v-model.number="temp.bottom_price"/>
        </el-form-item>
        <el-form-item :label="$t('goods.in_price')" prop="in_price">
          <el-input v-model.number="temp.in_price"/>
        </el-form-item>
        <el-form-item :label="$t('goods.goods_spec')" prop="goods_spec">
          <el-input v-model="temp.goods_spec"/>
        </el-form-item>
        <el-form-item :label="$t('goods.goods_unit')" prop="goods_unit">
          <el-input v-model="temp.goods_unit"/>
        </el-form-item>
        <el-form-item :label="$t('goods.is_food')" style="width:38%">
                <el-switch
                  v-model="temp.is_food"
                  active-color="#13ce66"
                  active-value="1"
                  inactive-value="0"
                  inactive-color="#ff4949">
                </el-switch>
              </el-form-item>
        <el-form-item :label="$t('goods.remark')">
          <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.remark" type="textarea" placeholder="备注"/>
        </el-form-item>
      </el-form> -->
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
              <el-form-item :label="$t('goods.name')">
                <el-input :disabled="true" v-model="temp.goods_name"/>
              </el-form-item>
            </el-col>   
            <el-col :span="12">
              <el-form-item :label="$t('goods.goods_num')">
                <el-input-number 
                  v-model="temp.goods_num" 
                  @change="numChange"
                  size="small" 
                  style="margin-bottom:5px;" 
                  :min="1" 
                  :max="100" 
                  label="数量">
                </el-input-number>
              </el-form-item>
            </el-col> 
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item :label="$t('goods.in_price')" prop="goods_in_price">
                <el-input @change="inPriceChange" v-model.number="temp.goods_in_price"/>
              </el-form-item>
            </el-col>   
            <el-col :span="12">
              <el-form-item :label="$t('goods.ruku_price')" prop="ruku_price">
                <el-input :disabled="true" v-model.number="temp.ruku_price"/>
              </el-form-item>
            </el-col> 
          </el-row>
        </div>       
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button  type="primary" @click="createData">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

// import { goodsAll } from '@/api/goods'
import { inventoryList, createInventory } from '@/api/inventory'
import waves from '@/directive/waves' // 水波纹指令
import { parseTime } from '@/utils'
import { foodStatus }  from '@/config.js'

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
  name: 'inventoryList',
  directives: {
    waves
  },
  filters: {
    foodStatusFilter(status) {
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
        goods_id: '',
        goods_name: '',
        goods_num: 0,
        goods_in_price: 0,
        ruku_price: 0,
        inventory_type: '1',
        inventory_now: '',         
      },
      dialogFormVisible: false,
      rules: {
        goods_in_price: [
          { required: true, message: '请输入进价' },
          { type: 'number',  message: '价格应为数字' },
        ],
      },
    }
  },
  created() {
    this.getInventoryList()

  },
  methods: {
    getInventoryList() {
      this.listLoading = true
      inventoryList(this.listQuery).then(response => {
        this.list = response.data.data
        this.total = response.data.total
        // console.log(this.list)
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getInventoryList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getInventoryList()
    },
    inPriceChange(val){
      this.temp.ruku_price = this.temp.goods_num * this.temp.goods_in_price
    },
    numChange(val){
      this.temp.ruku_price = this.temp.goods_num * this.temp.goods_in_price
    },
    resetTemp(row) {
      this.temp = {
        id: row.id,
        goods_id: row.goods_id,
        goods_name: row.belongs_to_goods.name,
        goods_num: 1,
        ruku_price: 0,
        goods_in_price: 0,
        inventory_type: '1',
        inventory_now: row.inventory_now,
      }
    },
    handleCreate(row) {
      // console.log(row)
      // return false
      this.resetTemp(row)
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      /*console.log(this.temp)
      return false*/
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          /*console.log(this.temp)
          return false*/
          createInventory(this.temp).then((response) => {
          //console.log(response.data.data);
          
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