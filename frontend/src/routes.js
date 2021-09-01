import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default function Routes(){
    return (
        <BrowserRouter>
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/search" component={Search}/>
            <Route path="/cart" component={Cart}/>
            <ClientRoute path="/info" component={Info}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/confirm" component={Confirm}/>
    
            <AdminRoute path="/admin/products" component={Products}/>
            <AdminRoute path="/admin/comments" component={Comments}/>
            <AdminRoute path="/admin/customers" component={Customers}/>
            <AdminRoute path="/admin/categories" component={Categories}/>
            <AdminRoute path="/admin/advertising" component={Advertising}/>
            <AdminRoute path="/admin/subcategories" component={Subcategories}/>
            <AdminRoute path="/admin/profile" component={Profile}/>
    
            <AdminMasterRoute path="/admin/admins" component={Admins} />
    
            <Route path="/admin" component={LoginAdm}/>
    
            <Route path="/:product" exact component={DescriptionProducts}/>
          </Switch> */}
        </BrowserRouter>
      );
}