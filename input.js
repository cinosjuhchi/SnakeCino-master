let inputDirection = { c: 0, s: 0 }
let lastInputDirection = { c: 0, s: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.s !== 0) break
            inputDirection = { c: 0, s: -1 }
            break
        case 'ArrowDown':
            if(lastInputDirection.s !== 0) break
            inputDirection = { c: 0, s: 1 }
            break
        case 'ArrowLeft':
            if(lastInputDirection.c !== 0) break
            inputDirection = { c: -1, s: 0 }
            break    
        case 'ArrowRight':
            if(lastInputDirection.c !== 0) break
            inputDirection = { c: 1, s: 0 }
            break
        
    }
})

var startX = 0;
var startY = 0;
var distX = 0;
var distY = 0;

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('touchstart', handleTouchStart);
window.addEventListener('touchmove', handleTouchMove);
window.addEventListener('touchend', handleTouchEnd);

function handleKeyDown(e) {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.s !== 0) break;
            inputDirection = { c: 0, s: -1 };
            break;
        case 'ArrowDown':
            if (lastInputDirection.s !== 0) break;
            inputDirection = { c: 0, s: 1 };
            break;
        case 'ArrowLeft':
            if (lastInputDirection.c !== 0) break;
            inputDirection = { c: -1, s: 0 };
            break;
        case 'ArrowRight':
            if (lastInputDirection.c !== 0) break;
            inputDirection = { c: 1, s: 0 };
            break;
    }
}

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
}

function handleTouchMove(e) {
    e.preventDefault();
    distX = e.touches[0].clientX - startX;
    distY = e.touches[0].clientY - startY;
}

function handleTouchEnd() {
    if (Math.abs(distX) > Math.abs(distY)) {
        // swipe horizontal
        if (distX > 0) {
            // swipe right
            if (lastInputDirection.c !== 0) return;
            inputDirection = { c: 1, s: 0 };
        } else {
            // swipe left
            if (lastInputDirection.c !== 0) return;
            inputDirection = { c: -1, s: 0 };
        }
    } else {
        // swipe vertical
        if (distY > 0) {
            // swipe down
            if (lastInputDirection.s !== 0) return;
            inputDirection = { c: 0, s: 1 };
        } else {
            // swipe up
            if (lastInputDirection.s !== 0) return;
            inputDirection = { c: 0, s: -1 };
        }
    }
}


export function getInputDirection(){
    lastInputDirection = inputDirection
    return lastInputDirection
}