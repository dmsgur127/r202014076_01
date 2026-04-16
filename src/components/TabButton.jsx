export default function TabButton(props) {
    // document.querySelector('button').addEventListener('click', () => {})
    // 자바 스크립트 방식

    function handleClick() {
        console.log('hello World!');
    }

    return (
    <li>
        <button onClick={handleClick}>{props.children}</button>
    </li>
    );
}
