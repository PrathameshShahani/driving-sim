AFRAME.registerComponent('wheel', {
    init: function () {
        this.wheelmove();
    },

    wheelmove: function () {
        var camera = document.querySelector("#camera")
        var camrot = camera.getAttribute("rotation")

        var speedtext = document.querySelector("#speed")
        var speed = 0;
        console.log(speed)
        window.addEventListener('keydown', function (e) {
            if (e.code == "ArrowLeft") {
                var wheelEl = document.querySelector("#wheel-scene")
                wheelEl.setAttribute("rotation", { x: 20, y: 90, z: 90 })
                
                //camrot.rotation({x:0,y:y+5,z:0})
            }

            if (e.code == "ArrowRight") {
                var wheelEl = document.querySelector("#wheel-scene")
                wheelEl.setAttribute("rotation", { x: 0, y: -90, z: -90 })
            }

            if (e.code == "ArrowDown") {
                var brakepedal = document.querySelector("#break-pedal");
                brakepedal.setAttribute("material", "color", "red")
                if(speed!=-30)
                speed-=1
                speedtext.setAttribute("text",{value:speed})
            }

            if(e.code == "ArrowUp"){
                var accpedal = document.querySelector("#accelerator-pedal");
                accpedal.setAttribute("material","color","green")
                if(speed!=30)
                speed+=1;
                speedtext.setAttribute("text",{value:speed})
            }
        })

        window.addEventListener('keyup', function (e) {
            if (e.code == "ArrowDown") {
                var brakepedal = document.querySelector("#break-pedal");
                brakepedal.setAttribute("material", "color", "gray")

                while(speed!=0)
                speed+=1;
                speedtext.setAttribute("text",{value:speed})
            }

            if(e.code == "ArrowUp"){
                var accpedal = document.querySelector("#accelerator-pedal");
                accpedal.setAttribute("material","color","gray")

                while(speed!=0)
                speed-=1;
                speedtext.setAttribute("text",{value:speed})
            }

            if (e.code == "ArrowLeft") {
                var wheelEl = document.querySelector("#wheel-scene")
                wheelEl.setAttribute("rotation", { x: 90, y: 0, z: 0 })
            }

            if (e.code == "ArrowRight") {
                var wheelEl = document.querySelector("#wheel-scene")
                wheelEl.setAttribute("rotation", { x: 90, y: 0, z: 0 })
            }
        })
    }
})