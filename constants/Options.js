export const SelectTravelerList=[
    {
        id:1,
        title:'Apenas eu',
        desc:'Viajando e explorando sozinho',
        icon:'👽',
        people:'1 pessoa'
    },
    {
        id:2,
        title:'Um casal',
        desc:'Duas pessoas viajando em conjunto',
        icon:'🗼',
        people:'2 pessoas'
    },
    {
        id:3,
        title:'Familia',
        desc:'Viajando e  curtindo em familia',
        icon:'🏝',
        people:'3 a 5 pessoas'
    },
    {
        id:4,
        title:'Amigos',
        desc:'Um grupo de caçadores de emoções',
        icon:'🛸',
        people:'5 a 10 pessoas'
    },
]

export const selectBudget=[
    {
        id:1,
        title:'Barato',
        desc:'fique atento aos custos',
        icon: '💵'
    },
    {
        id:2,
        title:'Moderado',
        desc:'Mantenha os custos na média',
        icon: '💰'
    },
    {
        id:3,
        title:'Ostentação',
        desc:'Não se preocupe com o custo',
        icon: '💸'
    }
]


export const AI_PROMPT='Gerar plano de viagem para local em Formato JSON: {location}, por {totalDays} dia e {totalNight} noite para {traveler} com orçamento de {budget} com detalhes do voo, preço do voo com URL de reserva, lista de opções de hotéis com nome do hotel, endereço do hotel, preço, URL da imagem do hotel, coordenadas geográficas , classificação, descrições e locais para visitar nas proximidades com nome do local, detalhes do local, URL da imagem do local, coordenadas geográficas, preços dos ingressos, viagem no tempo em cada local por {totalDays} dia e {totalNight} noite com plano de cada dia com melhor horário para visitar no formato JSON.'