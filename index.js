const btn = document.getElementById("share-border");
const shardCard = document.getElementById("share-card");
const shardImg = document.getElementById("shard-img");

let activeRe = /active(.*)/i;

let activeBtnName = btn.className;
let inactiveBtnName = "inactive" + activeBtnName.match(activeRe)[1]

let activeShardCardName = shardCard.className;
let inactiveShardCardName = "inactive" + activeShardCardName.match(activeRe)[1]

let activeShardImgName = shardImg.className["animVal"];
let inactiveShardImgName = "inactive" + activeShardImgName.match(activeRe)[1]


btn.addEventListener('click', function () {

    if (shardCard.classList.contains(activeShardCardName)) {
        shardCard.classList.remove(activeShardCardName);
        shardCard.classList.add(inactiveShardCardName);
    }

    if (btn.classList.contains(activeBtnName)) {

        btn.classList.remove(activeBtnName);
        btn.classList.add(inactiveBtnName);

        if (shardImg.classList.contains(activeShardImgName)) {

            shardImg.classList.remove(activeShardImgName);
            shardImg.classList.add(inactiveShardImgName);
        }
    }
});

btn.addEventListener('click', function (e) {
    e.stopPropagation();
})

document.addEventListener('click', function () {
    if (shardCard.classList.contains(inactiveShardCardName)) {
        shardCard.classList.remove(inactiveShardCardName);
        shardCard.classList.add(activeShardCardName);
    }

    if (btn.classList.contains(inactiveBtnName)) {

        btn.classList.remove(inactiveBtnName);
        btn.classList.add(activeBtnName);

        if (shardImg.classList.contains(inactiveShardImgName)) {

            shardImg.classList.remove(inactiveShardImgName);
            shardImg.classList.add(activeShardImgName);
        }
    }
})
