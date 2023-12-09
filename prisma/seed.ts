import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient;

async function main() {
    const types = [
        {name:'Combos',image:'https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais'},
        {name:'Acompanhamentos',image:'https://latourangelle.com/cdn/shop/articles/hikynvl8pjkjqhvpnok6_1200x1200.jpg?v=1619198610'},
        {name:'Bebidas',image:'https://i.em.com.br/Eg6c1OehLhjzeJV3rqRFcM-WfPw=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/06/29/1513945/refrigerante-em-copo-de-vidro_1_82231.jpg'},
        {name:'Sobremesas',image:'https://static7.depositphotos.com/1156423/682/i/450/depositphotos_6823478-stock-photo-white-chocolate-cheesecake.jpg'}
    ];
    const extras = [
        {name:'Bacon', image:'https://st2.depositphotos.com/5450958/9995/i/950/depositphotos_99950232-stock-photo-cooked-bacon-rashers-close-up.jpg', desc:'10g', price: 1.00},
        {name:'Cheddar', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6Sj3syJ2r8l9bXkAUjr1logTfnDM-LRYIw&usqp=CAU', desc:'10g', price: 1.00},
        {name:'Molho', image:'https://img.freepik.com/premium-photo/plastic-dish-barbecue-sauce-white-background_711700-456.jpg?w=2000', desc:'Barbecue', price: 1.00},
        {name:'Gelo', image:'https://thumbs.dreamstime.com/b/three-ice-cubes-white-background-145488211.jpg', desc:'4 cubos', price: 0.10}
    ]

    const exists = await prisma.type.findFirst();
    if(!exists){
        const type:any = []
        for (let i = 0; i < types.length; i++) {
            const element = await prisma.type.create({
                data: types[i]
            })
            type.push(element)
        }
        const extra:any = []
        for (let i = 0; i < extras.length; i++) {
            const element = await prisma.extra.create({
                data: extras[i]
            })
            extra.push(element)
        }
        const menus:any = [
            {name:'Combo 1',image:'https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais',desc:'1x hambúrguer 100g, queijo cheddar, tomate, alface',sdesc:'1x hambúrguer 100g',price:30.50,selled:5,extra:[extra[0],extra[1],extra[2]],typeId:type[0].id},
            {name:'Coca cola',image:'https://i.em.com.br/Eg6c1OehLhjzeJV3rqRFcM-WfPw=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/06/29/1513945/refrigerante-em-copo-de-vidro_1_82231.jpg',desc:'Coca cola lata 350ml',sdesc:'lata 350ml',price:5.50,selled:10,extra:[extra[3]],typeId:type[1].id},
            {name:'Porção de fritas',image:'https://latourangelle.com/cdn/shop/articles/hikynvl8pjkjqhvpnok6_1200x1200.jpg?v=1619198610',desc:'porção de fritas 500g',sdesc:'fritas 500g',price:25.50,selled:3,extra:[],typeId:type[2].id},
            {name:'Sorvete',image:'https://static7.depositphotos.com/1156423/682/i/450/depositphotos_6823478-stock-photo-white-chocolate-cheesecake.jpg',desc:'sorvete de massa 5 bolas',sdesc:'5 bolas',price:25.00,selled:2,extra:[],typeId:type[3].id}
        ]
        const menu:any = []
        for (let i = 0; i < menus.length; i++) {
            const element = await prisma.menu.create({
                data: {
                    name: menus[i].name,
                    image: menus[i].image,
                    desc: menus[i].desc,
                    sdesc: menus[i].sdesc,
                    price: menus[i].price,
                    selled: menus[i].selled,
                    extra: {
                        connect: menus[i].extra.map(e => {return {id: e.id}})
                    },
                    typeId: menus[i].typeId
                }
            })
            menu.push(element)
        }
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })