export const Increment=(step)=>{
    //returns a object
    return{
        type:"INCREMENT",
        payload:{
            data:step //data to be passed
        }
    }
}

export const Decrement=(step)=>{
    return{
        type:"DECREMENT",
        payload:{
            data:step //data to be passed
        }
    }
}