import { combineReducers } from 'redux'

const productState = {
  fetching: false,
  product : {},
  products: []
};


function crudProducts(state = productState, action) 
{
    switch (action.type) {
	
        case 'GET_PRODUCTS':
            return Object.assign({}, state, 
            {
                fetching : false,
                products : action.response.data.products
            });


        case 'GET_PRODUCT':
            return Object.assign({}, state, 
            {
                fetching : false,
                product : action.response.data.product
            });


        case "DELETE_PRODUCTS":
        var toDelete = new Set([action.response.data.deleteProduct._id]);
        var newArray = state.products.filter(obj => !toDelete.has(obj._id));
        return Object.assign({}, state, 
            {
                fetching : false,
                products : newArray
            });


        case "ADD_PRODUCT_FINISHED":
        return Object.assign({}, state, 
            {
                fetching : false,
                products : [...state.products, action.response.data.createProduct ]
            });


        case "EDIT_PRODUCT":
        return Object.assign({}, state, 
            {
                fetching : false,
                product : {},
                products: state.products.map((todo, index) => 
                {
                    if (todo._id === action.response.data.editProduct._id) 
                    {
                        return Object.assign({}, todo, action.response.data.editProduct);
                    }
                    return todo;
                })
            });

        case 'START_LOADING':
           return Object.assign({}, state, {
            fetching:true,
        });

      default:
      return state;

   }
}

const productApp = combineReducers({
   crudProducts
})

export default productApp