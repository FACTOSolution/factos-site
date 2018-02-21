var servicos_img = [{
    src: "factos/src/assets/mobile.svg",
    desc: "Aplicações Mobile"
}, {
    src: "factos/src/assets/pc.svg",
    desc: "Aplicações Desktop"
}, {
    src: "factos/src/assets/web.svg",
    desc: "Aplicações Web"
}];

var portfolio_img = [{
    src: "factos/src/assets/port1.png",
    desc: "App: Cuidado Pré-natal",
    link: "https://play.google.com/store/apps/details?id=br.factos.fmendes.cuidadoprenatalapp&hl=pt_BR"
}, {
    src: "factos/src/assets/port2.png",
    desc: "Site: Jornada de Quimica",
    link: ""
}, {
    src: "factos/src/assets/port3.png",
    desc: "Site: BDOdonto",
    link: ""
}];

var equipe = [
    {
        nome: "Lucas Brito",
        funcao: "Desenvolvedor Android",
        img: "https://gravatar.com/avatar/4f407c04d21cf513944af569479e4e8c.jpg?s=200"
    },
    {
        nome: "Kássio Venícios",
        funcao: "Desenvolvedor Front-end",
        img: "https://gravatar.com/avatar/49f7bf5f89f0d13aafb83bfc8261243b.jpg?s=200"
    },
    {
        nome: "Pedro Albuquerque",
        funcao: "Desenvolvedor Back-end",
        img: "https://gravatar.com/avatar/e5884a42a4d7b2080617fc8495bc4c5a.jpg?s=200"
    },
    {
        nome: "Orlando Amorim",
        funcao: "Desenvolvedor IOS",
        img: "https://gravatar.com/avatar/54e21f266bf31a5bdbb2dcb116725ae7.jpg?s=200"
    },
    {
        nome: "Francisco Mendes",
        funcao: "Desenvolvedor Android",
        img: "https://gravatar.com/avatar/26fa51b09d3211071dcf9963cb592f65.jpg?s=200"
    },
    {
        nome: "Neclyeux Sousa",
        funcao: "Desenvolvedor Back-end",
        img: "https://gravatar.com/avatar/9ac4734438f7d01eda79f1aa47edd9b5.jpg?s=200"
    },
    {
        nome: "Pablo Vinícius",
        funcao: "Desenvolvedor Back-end",
        img: "https://gravatar.com/avatar/14b4540eadfd1ddeb0f533e9c279adf5.jpg?s=200"
    },
    {
        nome: "Renato Almeida",
        funcao: "Desenvolvedor Back-end",
        img: "https://gravatar.com/avatar/da0bf491209fa5a5fa3e89bc582bee72.jpg?s=200"
    },
    {
        nome: "Edson Moita",
        funcao: "Desenvolvedor Back-end",
        img: "https://gravatar.com/avatar/cc9c4a02a3bf9562500b18d4c3cfa97f.jpg?s=200"
    },
    {
        nome: "Jeova Pereira",
        funcao: "Desenvolvedor FullStack",
        img: "https://gravatar.com/avatar/c5d420a8a2008cc3117d7eaa96f2b281.jpg?s=200"
    },
    {
        nome: "Elineide Silva",
        funcao: "Desenvolvedora Front-end",
        img: "https://gravatar.com/avatar/842f482d0f0c17a71c4d3f91705503ba.jpg?s=200"
    },
    {
        nome: "Ricardo Lira",
        funcao: "Coordenador",
        img: "https://scontent.frec10-1.fna.fbcdn.net/v/t1.0-9/15032684_1025962427530463_701155028892175279_n.jpg?oh=f3d984f0709876e3aae70a9104ec80e1&oe=5A95F85C"
    },
    {
        nome: "Armando Sousa",
        funcao: "Coordenador",
        img: "https://avatars1.githubusercontent.com/u/328464?s=400&v=4"
    },
    {
        nome: "Valdemir Junior",
        funcao: "Coordenador",
        img: "factos/src/assets/valdemir.jpg"
    },
    {
        nome: "Alcilene Dalila",
        funcao: "Coordenadora",
        img: "factos/src/assets/alcilene.jpg"
    },
    {
        nome: "Antônio Oséas",
        funcao: "Coordenador",
        img: "factos/src/assets/antoniooseas.png"
    }
];

var set_minicursos = [
    {
        nome: "Introdução ao Linux",
        desc: "Curso básico de linux. Tem o objetivo de familiarizar os alunos com o Sistema Operacional Linux.",
        link: "https://goo.gl/forms/fYVrc3xzKy9jSiE32"
    }/*,
    {
        nome: "Introdução a Web com HTML e CSS",
        desc: "Curso básico para o entendimento da Web. Tem como objetivo mostrar conceitos de HTML e CSS, bem como as novas tecnologias introduzidas no HTML e CSS.",
        link: "http://factos.ufpi.br/minicursos/minicursos/htmlcss.html"
    }*/
];

var set_contato = [
    [{
            name: "Endereço",
            desc: "Departamento de Computação - CCN",
            link: ""
        },
        {
            name: "Email",
            desc: "factos@ufpi.edu.br",
            link: ""
        }
    ],
    [
        {
            name: "Github",
            desc: "https://github.com/FACTOSolution",
            link: "https://github.com/FACTOSolution"
        },
        {
            name: "Facebook",
            desc: "facebook.com/factosufpi",
            link: "https://facebook.com/factosufpi"
        },
    ]
];

var set_equipe = [];
var lim_equipe = equipe.length/4;
for(var i = 0; i < lim_equipe; i++){
    set_equipe.push({
        id: "equipe_"+(i+1),
        list: equipe.slice(i*4, Math.min(4*i+4, equipe.length))
    });
}

console.log(set_equipe)

new Vue({
    el: "#set_contato",
    data: {
        set_contato: set_contato
    }
})

new Vue({
    el: "#set_equipe",
    data: {
        set_equipe: set_equipe
    }
});

new Vue({
    el: "#servicos_itens",
    data: {
        servico_img: servicos_img
    }
});

new Vue({
    el: "#portfolio_itens",
    data: {
        portfolio_img: portfolio_img
    }
});

new Vue({
    el: "#equipe_1",
    data: {
        equipe: equipe.slice(0, 4)
    }
});
new Vue({
    el: "#equipe_2",
    data: {
        equipe: equipe.slice(4, 8)
    }
});

new Vue({
    el: "#set_minicursos",
    data: {
        cursos: set_minicursos
    }
})