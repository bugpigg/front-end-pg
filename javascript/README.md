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

<details>
<summary> level2 - 2023.02.26</summary>

- 몇초 후에 뭔가를 실행하고 싶다면??
    - setTimeout()
- 몇초마다 뭔가를 실행하고 싶다면??
    - setInterval()
- 자바스크립트문법 vs 브라우저사용법

- includes() 로 문자 검사
    - 간단한 것만 검사 가능
    - 그래서 정규식을 사용하자
        ```
        /a/.test('abscd')
        /[a-z]/.test('abscd')
        /[ㄱ-ㅎ가-힣]/.test('abscd')
        /^a$d/.test('abscd')
        /\S+@\S+\.\S+/.test('abscd')
        ```

- 캐러셀 만들기
    - 브라우저 폭은 100vw

- 함수 return 문
    - 소수점반올림하기
        - 숫자.toFixed(몇자리)
        - 근데 이거 쓰면 문자가 댐

- 스크롤 이벤트
    ```
        window.addEventListener('scroll', function() {
            window.scrollY
            window.pageYOffset
            window.scrollTo(x,y)
            window.scrollBy(x,y)
            $(window).on('scroll', function() {
                $(window).scrollTop()
            })
        })
    ```
    - 모든 html은 document안에 있고, document는 window 안에 있다.
    - 스크롤이벤트 리스너의 경우 1초에 60번 정도 체크하므로 부담이 됨
    - 바닥체크도 여러번 중복으로 해줄듯

- 탭기능 만들기 
    ```
        $('.tab-button').eq(0).on('click', function() {
            $('.tab-button').removeClass('orange');
            $('.tab-button').eq(0).addClass('orange');
            $('.tab-content').removeClass('show');
            $('.tab-content').eq(0).addClass('show');
        })
    ```
    - 좋은관습
        - 설렉터는 시간이 꽤 걸리니, 변수에 넣어쓰자
    - for 반복문 써서 코드 중복 줄이자.
        ```
        for(let i=0;i<3;i++) {
            코드
        }
        ```

- 이벤트 버블링
    - 모든 브라우저는 이벤트 버블링이 일어남
    - 이벤트가 상위 html로 퍼지는 현상
    - 이를 해결하기 위해서는 이벤트 관련 함수를 활용해야함
        ```js
        ~~.addEventListener('click', function(e) {
            e.target // 유저가 실제로 누른거
            e.currentTarget // 이벤트리스너 달린 곳
            this // 이벤트리스너 달린 곳
            e.preventDefault() // 기본동작 막아줌
            e.stopPropagation() // 이벤트버블링 막아줌
        })
        ```

- 이벤트버블링 응용 -> 이벤트 리스너를 줄이자
    - 하나를 쓸때마다 램용량을 차지함...
    - html 태그에 몰래 정보숨기기 가능
        `data-자료이름="값"`
    - 출력하기 위해서는
        `설렉터.dataset.자료이름`

- 좋은 라이브러리들
    - Swiper
    - chart.js
    - animation od scroll
    - email.js
    - lodash
    - fullpage.js

</details>


<details>
<summary> level1 - 2023.02.12</summary>

- Array, Object 자료형

- 문자 중간에 변수 넣으려면, 백틱을 이용해라!
    - ${} 사용해서 변수도 사용 가능
    - 엔터도 사용 가능

</details>
