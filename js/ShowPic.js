// 获取模态框元素
var modal = document.getElementById("myModal");
var img = document.getElementById("myImage");
var modalImg = document.getElementById("img01");

// 点击图片打开模态框
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// 点击关闭按钮关闭模态框
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

// 点击模态框背景也关闭
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 按ESC键关闭模态框
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
    }
};