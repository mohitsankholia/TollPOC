import axios from 'axios'

const url="http://localhost:8081/FastTagTollPOC/toll"

export const append=async(obj)=>{
    const ack = await axios.post(`${url}/new`,obj)
    return ack
}

export const traverse=async()=>{
    const tmp=await axios.get(`${url}/`)
    return tmp
}

export const oneAtTime=async(param)=>{
    const tmp = await axios.get(`${url}/${param}`)
    return tmp
}

export const terminate=async(param)=>{
    const t = await axios.delete(`${url}/remove/${param}`)
    return t
}