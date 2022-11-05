document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello")
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelector('.grid div'))
    const ScoreDisplay = document.querySelector("#score")
    const StartButton = document.querySelector('#start_button')
    const width = 10

    const o_shap = [
        [0, 1, width, width*1+1]
        [0, 1, width, width*1+1]
        [0, 1, width, width*1+1]
        [0, 1, width, width*1+1]
    ]

    const o_shap_plus = [
        [0, 1, width, width*1+1, 2, width+2]
        [0, 1, width, width*1+1, width*2, width*2+1]
        [0, 1, width, width*1+1, 2, width+2]
        [0, 1, width, width*1+1, width*2, width*2+1]
    ]

    const l_shap = [
        [1, width+1, width*2+1, width*2+2]
        [width, width+1, width+2, width*2+2]
        [1, width+1, width*2, width*2+1]
        [widith, width*2, width*2+1, width*2+2]
    ]

    const rz_shap = [
        [width+1, width+2, width*2, width*2+1]
        [0, width, width+1, width*2+1]
        [1, 2, width, width+1]
        [1, width+1, width+2, width*2+2]
    ]

    const z_shap = [
        [width, width+1, width*2+1, width*2+2]
        [1, width, width+1, width*2]
        [0, 1, width+1, width+2]
        [1, width, width+1, width*2]
    ]

    const i_shap = [
        [1, width+1, width*2+1]
        [width, width+1, width+2]
        [1, width+1, width*2+1]
        [width, width+1, width+2]
    ]

    const t_shap = [
        [0, 1, 2, width+1, width*2+1]
        [2, width, width+1, width+2, width*2+2]
        [1, width+1, width*2, width*2+1, width*2+2]
        [0, width, width+1, width+2, width*2]
    ]

    const rt_shap = [
        [0, 1, 2, width+1]
        [2, width+1, width+2, width*2+2]
        [width+1, width*2, width*2+1, width*2+2]
        [0, width, width+1, width*2]
    ]


    // save all shapes in the array
    const allshap = [o_shap, o_shap_plus, l_shap, rz_shap, z_shap, i_shap, t_shap, rt_shap]

    let currentPosition = 4
    let current = allshaps[0][1]
    console.log(current)
})
