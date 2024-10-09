const base = {
    get() {
        return {
            url : "http://localhost:8080/phppg28ryio/",
            name: "phppg28ryio",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phppg28ryio/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "幸运舞蹈工作室管理系统设计与实现"
        } 
    }
}
export default base
