//copyright João Sousa 2021
function updateScroll() {
    var element = document.getElementById("scroll");
    element.scrollTop = element.scrollHeight;
}

function getIva(code) {
    //todo
}

var cores = ['#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67', '#F79F1F', '#A3CB38', '#1289A7', '#D980FA',
    '#B53471', '#EE5A24', '#009432', '#0652DD', '#9980FA', '#833471', '#EA2027', '#006266', '#1B1464',
    '#5758BB', '#6F1E51'
] //tem de ser 20


Vue.component('produtos-item', {
    template: '\
    <div v-on:click="$emit(\'montatalao\')" :style="\'background: \' + cor ">\
        <div class="overFlow">\
            {{ title }}\
        </div>\
        <div class="overFlow">\
            {{ preco }} {{ tipobotao }}\
        </div>\
    </div>\
    ',

    props: ['title', 'preco', 'cor', 'tipobotao']
})

var Invoice = [{ //TODO modelo para collection Invoice
    "InvoiceNo": "NFa 1",
    "Period": "1",
    "InvoiceDate": "2007-01-24",
    "InvoiceType": "Factura",
    "SystemEntryDate": "2007-01-24T15:37:50",
    "TransactionID": "",
    "CustomerID": "123456789",
    "Line": [
        {
            "LineNumber": "1",
            "ProductCode": "PR LJ5P",
            "ProductDescription": "Impressora Laser Jet 5P",
            "Quantity": "1",
            "UnitOfMeasure": "Unid",
            "UnitPrice": "482.59",
            "TaxPointDate": "2007-01-24",
            "Description": "Impressora Laser Jet 5P",
            "DebitAmount": "0",
            "CreditAmount": "482.59",
            "Tax": {
                "TaxType": "IVACON",
                "TaxCode": "Nor",
                "TaxPercentage": "21"
            },
            "SettlementAmount": "0"
        },
        {
            "LineNumber": "2",
            "ProductCode": "PR 720C",
            "ProductDescription": "Impressora Jet 720C",
            "Quantity": "1",
            "UnitOfMeasure": "Unid",
            "UnitPrice": "130",
            "TaxPointDate": "2007-01-24",
            "Description": "Impressora Jet 720C",
            "DebitAmount": "0",
            "CreditAmount": "130",
            "Tax": {
                "TaxType": "IVACON",
                "TaxCode": "Nor",
                "TaxPercentage": "21"
            },
            "SettlementAmount": "0"
        }
    ],
    "DocumentTotals": {
        "TaxPayable": "128.64", //iva
        "NetTotal": "612.59", //valor sem iva
        "GrossTotal": "741.23" //valor iva incluido
    }
},]

var app = new Vue({
    el: '#posapp',
    data: {
        total: 0.0,
        newTodoText: '',
        newPrecoText: 0.0,
        produtos: produtos,
        nextTodoId: 5,
        itemId: 1,
        Line: [], //talao
        iva: 23,
        modal1: false,
        modal2: false,
        numPadBody: false,
        numPadVal: '',
        numPadType: '',
        title: '',
        preco: 0,
        iva: 0,
        cor: '',
        Quantity: 1,
        desconto: 0,
        pagina: 1,
        maxPages: 0,
        dinheiro: 0.0,
        troco: '',
        pagarDiv: false,
        quantidadeDiv: false,
        precoDiv: false,
        descontoDiv: false,
        formataNegativo: false,
        linha: 0

    },
    created: function () {
        this.calcTotal()
        this.mudaPagina(1)

    },
    methods: {
        mudaPagina: function (p) {

            this.produtos = produtos // reset o slice em pag

            var page_number = p -1

            var page_size = 20 //cada pagina tem 20 itens
            var maxPages = Math.floor(this.produtos.length / page_size)

            this.maxPages = maxPages + 1

            if (page_number > maxPages) { //se for maior que o numero de paginas disponivel volta para a pagina 1
                page_number = 0
            }

            if (page_number < 0) {
                page_number = Math.floor(this.produtos.length / page_size)
            }

            var pag = produtos

            // console.log(produtos.length)
            // console.log(this.produtos.length)
            // console.log(this.maxPages)

            this.produtos = pag.slice(page_number * page_size, (page_number + 1) * page_size); //slice produtos 20 por pagina

            this.pagina = page_number + 1 //atualiza numero da pagina que esta a ser visualizada
            
        },
        addNewTodo: function () {
            this.produtos.push({
                id: this.nextTodoId++,
                title: this.newTodoText,
                preco: this.newPrecoText,
                iva: this.iva
            })
            this.newTodoText = ''
            this.newPrecoText = 0
            this.modal2 = false;
        },
        removeAll: function () {
            this.Line.splice(0, this.Line.length);
            this.itemId = 1;
            this.calcTotal();
            this.resetNumPad();
        },
        remover: function () { //remover item do talao
            var i = this.itemId
            this.Line.splice(i, 1);
            this.calcTotal()
            this.modal1 = false;
        },
        edit: function (i) { //modal1
            this.linha = i
            this.modal1 = true
            this.itemId = i
            this.title = this.Line[i].title
            this.preco = this.Line[i].preco
            this.iva = this.Line[i].iva
            this.Quantity = this.Line[i].Quantity
        },
        saveEdit: function () { //modal1
            var i = this.itemId
            this.Line[i].title = this.title
            this.Line[i].preco = this.preco
            this.Line[i].iva = this.iva
            this.Line[i].Quantity = this.Quantity
            this.modal1 = false
            this.calcTotal()
        },
        calcTotal: function () {
            this.total = 0.0
            this.Quantity = 1
            this.desconto = 0
            for (var x = 0; x < this.Line.length; x++) {
                this.total = this.total + (this.Line[x].preco * this.Line[x].Quantity)

            }
            this.total = this.total.toFixed(2) //fix float calc.
            
        },
        numPadTypeOp: function (type) { //roda de cada vez que um botao do numpad e pressionado

            switch (type) {
                case 'Quantity':
                    if (this.numPadVal == 0) { //impedir que a quntidade fique a zero
                        this.numPadVal = ''
                        this.Quantity = 1
                    } else {
                        this.Quantity = this.numPadVal
                    }

                    break;

                case 'preco':
                    if (this.numPadVal == 0) { //impedir que preço fique a zero
                        //todo em vez de pegar o preço na linha do talao pegar na "tabela"
                        this.preco = this.Line[this.linha].preco
                    } else {
                        this.preco = this.numPadVal
                    }

                    break;

                case 'desconto':
                    var p = this.preco
                    this.desconto = this.numPadVal
                    this.preco = (p - this.desconto)

                    break;

                case 'pagar':

                    if (this.numPadVal == '') { //impedir que a quntidade fique a zero
                        this.dinheiro = 0.0
                    } else {
                        this.dinheiro = this.numPadVal
                    }
                    this.troco = this.numPadVal - this.total
                    this.troco = this.troco.toFixed(2)

                    if (Number(this.dinheiro) < Number(this.total)) {
                        this.formataNegativo = true;
                    } else {
                        this.formataNegativo = false;
                    }
                    break;

                default:
                    break;
            }
        },
        numPadTypef: function (type) { //muda o tipo de numPad exemplo Quantity preço pagar...

            if ( type == "pagar" && this.Line.length == 0) {
                alert("Não é possível fechar a conta porque a lista está vazia!")
            } else {
                this.numPadType = type;
                this.resetNumPad();
                this.numPadBody = true;
    
                switch (type) {
                    case 'Quantity':
                        this.quantidadeDiv = true;
                        break;
    
                    case 'preco':
                        this.precoDiv = true;
                        break;
    
                    case 'desconto':
                        this.descontoDiv = true;
    
                        break;
    
                    case 'pagar':
                        this.pagarDiv = true;
                        this.numPadTypeOp(type)
                        break;
    
                    default:
                        break;
                }
            }

        },
        resetNumPad: function () {
            this.numPadVal = ''
            this.numPadBody = false
            this.pagarDiv = false;
            this.quantidadeDiv = false;
            this.precoDiv = false;
            this.descontoDiv = false;
        },
        registar: function () {
            if (this.formataNegativo == true) {
                alert('Valor insuficiente!')
            } else {
                alert('Registado... agora é com o back-end :)')

                //TODO
                //Back-end stuff 
                //faça aqui o que quiser salvar numa db
                //implementar invoice com cmapos compativeis com ficheiro SAFT
                
                this.resetNumPad(); this.removeAll();
            }
            
        },
        addLine: function (ob) { //adiciona item a conta aka talao
            if (ob.tipobotao == "link") {

                //this.todos = eval(ob.page)
                this.mudaPagina(ob.page)

                // this.todos.splice(0, this.todos.length);

                console.log(JSON.stringify(eval(ob.page)));

            } else {
                this.Line.push({
                    id: this.itemId++,
                    title: ob.title,
                    preco: ob.preco,
                    iva: ob.iva, //getIva()
                    Quantity: this.Quantity
                })

                //exemplo SAF-T
                // "LineNumber": "1",
                // "ProductCode": "PR LJ5P",
                // "ProductDescription": "Impressora Laser Jet 5P",
                // "Quantity": "1",
                // "UnitOfMeasure": "Unid",
                // "UnitPrice": "482.59",
                // "TaxPointDate": "2007-01-24",
                // "Description": "Impressora Laser Jet 5P",
                // "DebitAmount": "0",
                // "CreditAmount": "482.59",
                // "Tax": {
                //     "TaxType": "IVACON",
                //     "TaxCode": "Nor",
                //     "TaxPercentage": "21"
                // },
                // "SettlementAmount": "0"

                this.calcTotal();
                //updateScroll();
            }
        }
    },
    watch: {

        numPadVal: function () {
            this.numPadTypeOp(this.numPadType)

        }
    },
    updated: function() { //este função e executada sempre depois do render
        this.$nextTick( function () {
            updateScroll()
        })
    }

})

setTimeout(function () { //loading
    document.getElementById('posapp').style.display = 'block'
}, 500)

//ELECTRON STUFF 
const { ipcRenderer } = require('electron')

function fecharPrograma() {
    ipcRenderer.send('fecharPrograma')
}

function imprimir() {
    ipcRenderer.send('imprimir')
}