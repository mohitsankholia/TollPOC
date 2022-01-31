import axios from 'axios'

const url="http://localhost:8081/FastTagTollPOC/toll"

const append=async(obj)=>{
    const ack = await axios.post(`${url}/new`,obj)
    return ack
}

export {append}