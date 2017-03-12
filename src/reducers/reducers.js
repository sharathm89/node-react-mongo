import { combineReducers } from 'redux'

const immutableState = {
  fetching: false,
  product : {},
  products: []
};


function todos(state = immutableState, action) 
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


        case "ADD_PRODUCT_REQUEST":
        return Object.assign({}, state, {
            fetching:true,
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


      default:
      return state;

   }
}

const todoApp = combineReducers({
   todos
})

export default todoApp