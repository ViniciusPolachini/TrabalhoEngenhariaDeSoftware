export const questoes = [
    {
        questao:"Data da última atualização do lattes",
        numero:"1",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Qual foi o resultado da avaliação do seu último relatório?",
        numero:"2",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["Aprovado", "Aprovado com resalva", 'Insatisfatorio', 'Não se aplica (é o meu primeiro relatório)'],
        tipo:"radio"
    },
    {
        questao:"Qual é o seu curso?",
        numero:"3",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["Mestrado", "Doutorado"],
        tipo:"radio"
    },
    {
        questao:"Este relatório é referente a qual semestre do seu curso?",
        numero:"4",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["1-semestre", "2-semestre", "3-semestre", "4-semestre", "5-semestre", "6-semestre", "7-semestre", "8-semestre"],
        tipo:"radio"
    },
    {
        questao:"Em quantas disciplinas obrigatórias você já obteve aprovação?",
        numero:"5",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Em quantas disciplinas optativas você já obteve aprovação?",
        numero:"6",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Todos os conceitos em disciplinas cursadas no último semestre já foram divulgados? Caso não, espere até 2 dias antes da data máxima definida no site do PPgSI para enviar o seu relatório.",
        numero:"7",
        regra:[{
            required: false,
        }],
        opcoes:['sim', 'não'],
        tipo:"radio"
    },
    {
        questao:"Em quantas disciplinas você foi reprovado desde o início do mestrado/doutorado?",
        numero:"8",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["0", "1", "2"],
        tipo:"radio"
    },
    {
        questao:"Em quantas disciplinas você foi reprovado no último semestre cursado?",
        numero:"9",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["0", "1", "2", "Já terminei as disciplinas"],
        tipo:"radio"
    },
    {
        questao:"Você já foi aprovado no exame de proficiência em idiomas?",
        numero:"10",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["Sim", "Não"],
        tipo:"radio"
    },   
    {
        questao:"Você já realizou o exame de qualificação?",
        numero:"11",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["Sim. Fui aprovado.", "Sim. Fui reprovado", "Não"],
        tipo:"radio"
    },
    {
        questao:"Se não qualificou, quanto tempo falta para o limite máximo de qualificação?",
        numero:"12",
        regra:[{
            required: false
        }],
        opcoes:["Menos de 3 meses", "Entre 3 a 6 meses", "Mais de 6 meses"],
        tipo:"radio"
    },
    {
        questao:"Se você já fez sua qualificação e foi aprovado, quanto tempo falta para o limite máximo do depósito da sua dissertação/tese?",
        numero:"13",
        regra:[{
            required: false
        }],
        opcoes:["Menos de 3 meses", "Entre 3 a 6 meses", "Mais de 6 meses"],
        tipo:"radio"
    },
    {
        questao:"Quantos artigos referentes a sua pesquisa de mestrado/doutorado você teve aceitos ou publicados? (Obs: Você deve inserir os artigos publicados no seu currículo Lattes)",
        numero:"14",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["0", "1", "2", "Mais de 2"],
        tipo:"radio"
    },
    {
        questao:"Você possui artigo em preparação para submissão? Qual o estágio dele?",
        numero:"15",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:["Não possuo", "Experimentos em elaboração", "Aguardando coleta de dados", "Em fase de escrita", "Em fase de tradução", "Preparando resposta para os rebisores"],
        tipo:"radio"
    },
    {
        questao:"Qual o estágio atual de sua pesquisa? Apresente toda e qualquer atividade que já tenha sido realizada no contexto de seu projeto de pesquisa (mesmo que ainda incompleta). Faça uma descrição detalhada.",
        numero:"16",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Você participou de algum congressos no país? Se sim, indicar local, se houve apresentação de trabalho e se o congresso é ou não internacional.",
        numero:"17",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Você participou de algum congresso no exterior? Se sim, indicar local e se houve apresentação de trabalho.",
        numero:"18",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Você realizou algum estágio de pesquisa ou visita de pesquisa no exterior (incluindo sanduíche)? Se sim, indique o nome da universidade e o período.",
        numero:"19",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Você tem algo a mais a declarar para a CCP - PPgSI?",
        numero:"20",
        regra:[{
            required: true,
            message: 'Preencha esse campo!!',
        }],
        opcoes:[],
        tipo:"texto"
    },
    {
        questao:"Comentários finais do ORIENTANDO sobre seu desempenho no último semestre, considerando o relatório reapresentado:",
        numero:"22",
        regra:[{
            required: false
        }],
        opcoes:[],
        tipo:"texto"
    }
]