class Calulcator {
    $previousPreview = ''
    $currentPreview = ''
    previousOperation = ''
    currentOperation = ''

    constructor($previousPreview, $currentPreview) {
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number) {
        this.$currentPreview.textContent += number
    }

    onPressOperation(operation) {
        this.$previousPreview.textContent = this.$currentPreview.textContent + ' ' + operation
        this.$currentPreview.textContent = ''
        this.previousOperation = operation
    }

    onEqual() {
        // 구현
        // this.previousOperation 어떤 연산이 들어왔지
        // this.$previousPreview.textContent, this.$currentPreview.textContent 을 연산한 결과
        // this.$currentPreview.textContent 에 출력
    }

    onReset() {
        this.$previousPreview.textContent = ''
        this.$currentPreview.textContent = ''
        this.previousOperation = ''
        this.currentOperation = ''
    }

    onDelete() {
        // 한개씩 지우기
    }
}

// DOM
// 사칙연산
const $plus = document.querySelector('[data-btn-plus]')
const $minus = document.querySelector('[data-btn-minus]')
const $divide = document.querySelector('[data-btn-divide]')
const $multifly = document.querySelector('[data-btn-multifly]')

// 연산
const $equal = document.querySelector('[data-btn-equal]')

// 전체삭제(AC), 삭제
const $reset = document.querySelector('[data-btn-reset]')
const $delete = document.querySelector('[data-btn-delete]')

// 숫자, 연산
const $numbers = document.querySelectorAll('[data-btn-number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

// 프롬프트
const $previousPreview = document.querySelector('[data-previous-preview]')
const $currentPreview = document.querySelector('[data-current-preview]')

// 연산 처리
const calc = new Calulcator($previousPreview, $currentPreview)

$numbers.forEach(($number) => {
    $number.addEventListener('click', (e) => {
        calc.onPressNumber(e.target.textContent)
    })
})

$operations.forEach(($operation) => {
    $operation.addEventListener('click', (e) => {
        calc.onPressOperation(e.target.textContent)
    })
})

$reset.addEventListener('click', (e) => {
    calc.onReset()
})