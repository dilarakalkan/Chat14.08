import {ref} from 'vue'

const globalVariables = ()=>{
    const viteChateEngineProjectId=ref("4c6c09ce-a8e4-40c2-9ef5-f5d0b571c687")
    const viteChateEnginePrivateKey=ref("025b01be-320d-47a3-8850-19f7dc370002")

    return{
        viteChateEngineProjectId,
        viteChateEnginePrivateKey,
    }
}
export default globalVariables


