import { prisma } from '@/config';

async function getCode(){
    const code = await prisma.order.findMany({
        select:{id:true},
        orderBy:{id:'desc'},
        take:1
    })
    return code
}

export const orderRepository = {
    getCode,
}