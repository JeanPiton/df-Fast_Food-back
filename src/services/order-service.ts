import { notFoundError } from "@/errors";
import { orderRepository } from "@/repositories";

async function getCode(){
    const code = await orderRepository.getCode()
    return code.length==0?0:code[0].id
}

async function getTodoOrders() {
    const orders = await orderRepository.getTodoOrders()
    return orders
}

async function getDoneOrders() {
    const orders = await orderRepository.getDoneOrders()
    return orders
}

async function finishOrder(id:number){
    const order = await orderRepository.findById(id)
    if(!order) throw notFoundError('order with this id')
    await orderRepository.finishOrder(id)
}

async function postOrder(name,price,order){
    const createdOrder = await orderRepository.postOrder(name,price,order)
    return createdOrder
}

async function deleteOrder(id:number){
    const order = await orderRepository.findById(id)
    if(!order) throw notFoundError('order with this id')
    await orderRepository.deleteOrder(id)
}

export const orderService = {
    getCode,
    getTodoOrders,
    getDoneOrders,
    finishOrder,
    postOrder,
    deleteOrder
}