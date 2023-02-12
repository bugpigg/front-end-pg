## 코딩애플의 javaScript입문과 웹UI개발 들으면 간략 정리


<details>
<summary> level1 - 2023.02.12</summary>

- 자바스크립트의 근본
    - HTML의 모든 것을 바꿀 수 있다
        - `document.getElementById('').innerHTML = '';`
        - `getXXX` 부분을 설렉터라고 함

- 함수
    ```javascript
    function haha(param1, param2) {
        document.get...
    }
    ```

- 클래스명을 기반으로 요소를 조작하는 경우 인덱싱 필요  
    - id는 중복허용하지 않지만, class는 중복허용하기 때문

- addEventListener()
    ```javascript
    document.getElementById('').addEventListener('click', function() {
        // callback func
        // your code...
    })
    ```

- querySelector()
    - 하지만 맨 위에 나오는 한개만 찾아줌
    - 그럴때는 querySelectorAll()을 쓰자...

- js기니깐, jquery를 써보자...
    - js의 라이브러리임
    - querySelector -> $
    - .html(), .css() 등등 으로 축약댐
    - 이벤트리스너 -> .on()

- UI에 애니메이션 추가하기
    - 애니메이션은 가능하면 css만으로 처리하는게 좋음 -> 성능때문
    - 애니메이션에서는 visibility: hidden을 주자.

- if-else 문

- input 태그에서 일어나는 이벤트
    - 'change', 'input'
        - 값이 변할때를 특정함

- === 는 엄격한 비교
    - 타입까지 같아야 같다고 해준다

- 변수의 선언, 할당, 범위
    - 함수 안에서 정의하는 경우, 함수 안에서만 범위를 가짐
    - let, const
        - let은 재선언 불가능함
        - const는 재선언, 재할당 불가능함
        - 그리고 둘 다 중괄호가 함수의 범위이다. var은 함수내부인거에비해 좁은 범위

</details>
