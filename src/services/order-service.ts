import { orderRepository } from "@/repositories";

async function getCode(){
    const code = await orderRepository.getCode()
    return code.length==0?0:code[0].id
}

export const orderService = {
    getCode,
}