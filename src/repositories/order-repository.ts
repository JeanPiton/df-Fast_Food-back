import { prisma } from '@/config';

async function getCode(){
    const code = await prisma.order.findMany({
        select:{id:true},
        orderBy:{id:'desc'},
        take:1
    })
    return code
}

async function getTodoOrders() {
    const orders = await prisma.order.findMany({
        where:{done:false},
        orderBy:{updatedAt:'asc'}
    })
    return orders
}

async function getDoneOrders() {
    const orders = await prisma.order.findMany({
        where:{done:true},
        orderBy:{updatedAt:'desc'}
    })
    return orders
}

async function findById(id:number) {
    const order = await prisma.order.findUnique({
        where:{id}
    })
    return order
}

async function finishOrder(id:number) {
    await prisma.$executeRaw`UPDATE "Order" SET "done"='true', "updatedAt"=NOW() WHERE "id"=${id}`
}

async function postOrder(name,price,orders){
    const createdOrder = await prisma.order.create({
        data:{
            name,
            price,
            orders
        }
    })
    return createdOrder
}

async function deleteOrder(id:number){
    await prisma.order.delete({
        where:{id}
    })
}

export const orderRepository = {
    getCode,
    getTodoOrders,
    getDoneOrders,
    findById,
    finishOrder,
    postOrder,
    deleteOrder
}