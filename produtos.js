//copyright João Sousa 2021
var cores = ['#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67', '#F79F1F', '#A3CB38', '#1289A7', '#D980FA', '#B53471', '#EE5A24', '#009432', '#0652DD', '#9980FA', '#833471', '#EA2027', '#006266', '#1B1464', '#5758BB', '#6F1E51'] //tem de ser 20

var taxaIva = {'normal': 23, 'intermedia': 12, 'reduzida': 6}

var produtos = [
    {
        tipobotao: "€",
        ProductDescription: 'Cáfe',
        title: 'Café',
        preco: 0.8,
        iva: 23,
        cor: '#1abc9c',
    },
    {
        tipobotao: "€",
        title: 'Sumo',
        preco: 1.3,
        iva: taxaIva.reduzida,
        cor: '#2ecc71',
    },
    {
        tipobotao: "€",
        title: 'Água',
        preco: 1.0,
        iva: 23,
        cor: '#3498db',
    },
    {
        tipobotao: "€",
        title: 'Cola',
        preco: 1.5,
        iva: 23,
        cor: '#9b59b6',
    },
    {
        tipobotao: "€",
        title: 'Tosta Mista',
        preco: 3,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "link",
        title: 'Página 2',
        page: 2,
        cor: '#f1c40f',
    },
    {
        tipobotao: "€",
        title: 'Cerveja',
        preco: 1.5,
        iva: 12,
        cor: '#2ecc71',
    },
    {
        tipobotao: "€",
        title: 'Lasanha',
        preco: 9,
        iva: 12,
        cor: '#3498db',
    },
    {
        tipobotao: "€",
        title: 'Salada',
        preco: 3,
        iva: 12,
        cor: '#9b59b6',
    },
    {
        tipobotao: "€",
        title: 'Vinho Branco 0.75ml',
        preco: 3.5,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Vinho Tinto 0.75ml',
        preco: 3.5,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Pão',
        preco: 0.30,
        iva: 6,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Couvert',
        preco: 3,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Salada de Fruta',
        preco: 2.5,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Batata Frita 1 dose',
        preco: 3,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Batata Frita 1/2 dose',
        preco: 1.5,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Bacalhau à Gomes de Sá',
        preco: 10,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Bacalhau à Braga',
        preco: 10,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Pudim',
        preco: 3,
        iva: 12,
        cor: '#34495e',
    },
    {
        tipobotao: "€",
        title: 'Refrigerante',
        preco: 1.5,
        iva: 12,
        cor: '#34495e',
    },
    {//nova pagina
        tipobotao: "€",
        title: 'Pizza Familiar',
        preco: 11,
        iva: 12,
        cor: cores[0],
    },
    {
        tipobotao: "€",
        title: 'Pizza Média',
        preco: 5.5,
        iva: 12,
        cor: cores[1],
    },
    {
        tipobotao: "€",
        title: 'Pizza Pequena',
        preco: 3.5,
        iva: 12,
        cor: cores[2],
    },
    {
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[3],
    },
    {
        tipobotao: "€",
        title: 'xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[4],
    },
    {
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[5],
    },
    {
        tipobotao: "€",
        title: 'xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[6],
    },
    {
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[7],
    },
    {
        tipobotao: 'link',
        title: 'Voltar à Página 1',
        page: 1,
        cor: cores[8],
    },
    {
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[9],
    },
    {
        tipobotao: "€",
        title: 'xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[10],
    },
    {
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[11],
    },{
        tipobotao: "€",
        title: 'xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[12],
    },{
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[13],
    },{
        tipobotao: "€",
        title: 'xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[14],
    },{
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[15],
    },{
        tipobotao: "€",
        title: 'xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[16],
    },{
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[17],
    },{
        tipobotao: "€",
        title: 'xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[18],
    },{
        tipobotao: "€",
        title: 'XPTO',
        preco: 0.10,
        iva: 12,
        cor: cores[19],
    },
    {
        tipobotao: "€",
        title: 'Último xpto',
        preco: 0.10,
        iva: 12,
        cor: cores[19],
    },

]
