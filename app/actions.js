export const add=()=>{
    return {
        "type":"ADD"
    }
}
export const reduce=()=>{
    return {
        "type":"REDUCE"
    }
}

export const addnum = (num)=>{
    console.log("接收"+num)
    return {
        "type":"ADDNUM",
        "num":num
    }
}