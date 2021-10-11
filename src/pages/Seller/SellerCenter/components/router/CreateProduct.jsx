function CreateProduct(props){
  return(
    <div>
      <div className="form-create-product">
        <h2>Thông tin cơ bản</h2>
        <div className="name-product">
          <p>Tên sản phẩm*</p>
          <input placeholder="nhập tên sản phẩm"/>
        </div>
        <div className="form-group">
          <label className="control-label">Tình trạng sản phẩm *</label>
          <div className="condition">
            <div>
              <input id="infomation-radio-1" className="magic-radio" type="radio"
                     value="NEW"
                     name="inline-form-radio-condition"
                     // onChange={e => this.props.EmitInputOnChange(e, "condition")}
              />
              <label
                htmlFor="infomation-radio-1">Mới</label>
            </div>
            <div className="mt-2">
              <input id="infomation-radio-2"
                     value="USED"
                     className="magic-radio" type="radio"
                     name="inline-form-radio-condition"
                     // onChange={e => this.props.EmitInputOnChange(e, "condition")}
              /><label
              htmlFor="infomation-radio-2">Đã sử dụng</label>
            </div>
          </div>
        </div>
        {/*<div className="form-group">*/}
        {/*  <label className="control-label">Danh mục **/}
        {/*    <a href="https://chozoi.vn/help-center/quy-dinh-dang-san-pham.18" target="_blank" style={{color:"#7a878e"}}>*/}
        {/*      <i className="fa fa-info-circle"*/}
        {/*         data-toggle="tooltip"*/}
        {/*         data-placement="top"*/}
        {/*         title="Xem chiết khấu ngành hàng."*/}
        {/*      />*/}
        {/*    </a></label>*/}
        {/*  <div className="w-100 d-flex">*/}
        {/*    {this.store.listCategoriesLv1.length > 0 &&*/}
        {/*    <select className="form-control"*/}
        {/*            defaultValue={defaultCategory ? defaultCategory[0].toString() : ""}*/}
        {/*            onChange={e => CREATE_TEMPLATE_CONTROL.getListCategoriesLv2(parseInt(e.currentTarget.value))}*/}
        {/*            style={{width: '30%'}} required>*/}
        {/*      <option value="" disabled>---Lựa chọn---</option>*/}
        {/*      {this.store.listCategoriesLv1.map((value, index) =>*/}
        {/*        <option key={index}*/}
        {/*                value={value.id}>{value.name}</option>)}*/}
        {/*    </select>}*/}
        {/*    {this.store.listCategoriesLv2.length > 0 &&*/}
        {/*    <select className="form-control mx-3"*/}
        {/*            defaultValue={defaultCategory ? defaultCategory[1].toString() : ""}*/}
        {/*            key={this.state.keyCategoriesLv2}*/}
        {/*            onChange={e => CREATE_TEMPLATE_CONTROL.getListCategoriesLv3(parseInt(e.currentTarget.value))}*/}
        {/*            style={{width: '30%'}} required>*/}
        {/*      <option value="" disabled>---Lựa chọn---</option>*/}
        {/*      {this.store.listCategoriesLv2.map((value, index) =>*/}
        {/*        <option key={index}*/}
        {/*                value={value.id}>{value.name}</option>)}*/}
        {/*    </select>}*/}
        {/*    {this.store.listCategoriesLv3.length > 0 &&*/}
        {/*    <select className="form-control"*/}
        {/*            defaultValue={defaultCategory && defaultCategory[2] ? defaultCategory[2].toString() : ""}*/}
        {/*            key={this.state.keyCategoriesLv3}*/}
        {/*            onChange={e => CREATE_TEMPLATE_CONTROL.getListPropety(parseInt(e.currentTarget.value))}*/}
        {/*            style={{width: '30%'}} required>*/}
        {/*      <option value="" disabled>---Lựa chọn---</option>*/}
        {/*      {this.store.listCategoriesLv3.map((value, index) =>*/}
        {/*        <option key={index}*/}
        {/*                value={value.id}>{value.name}</option>)}*/}
        {/*    </select>}*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div>
          <p>Đặc điểm nổi bật</p>
          <textarea/>
        </div>
        <div className="image">
          <p>Ảnh sản phẩm</p>

        </div>
      </div>
    </div>
  )
}
export default CreateProduct
