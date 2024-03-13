const { schedule } = require('node-cron')

//h : horas
//m : minutos
//s : segundos
//d : dia
//mm : mes
//w : dia de la semana

module.exports = {
    periodic: (obj, job) => {
        const {
            h = false,
            m = false,
            s = false,
            d = false,
            mm = false,
            w = false
        } = obj
        const seconds = s ? `*/${s}` : ''
        const minutes = m ? `*/${m}` : '*'
        const hours = h ? `*/${h}` : '*'
        const day = d ? `*/${d}` : '*'
        const month = mm ? `*/${mm}` : '*'
        const week = w ? `*/${w}` : '*'

        const stringTime = `${seconds} ${minutes} ${hours} ${day} ${month} ${week}`

        schedule(stringTime, () => job())
    },
    spesific: (obj, job) => {
        const { s = '*', m = '*', h = '*', d = '*', mm = '*', w = '*' } = obj

        const stringTime = `${s} ${m} ${h} ${d} ${mm} ${w}`

        schedule(stringTime, () => job())
    }
}