let qr_content = document.getElementsByTagName('input')[0]
        let generate_btn = document.getElementById('generate_btn')
        let qr_img = document.getElementsByTagName('img')[0]
        generate_btn.addEventListener('click',()=>{
            if(qr_content.value == ""){
                alert("Input Field Is Empty")
            }else{
                qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qr_content.value}&amp;size=180x180`
                qr_img.style.display = 'block'
            }
        })