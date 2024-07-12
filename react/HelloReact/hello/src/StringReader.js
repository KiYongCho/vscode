import StringOperator from "./StringOperator";

export default function StringReader() {
    return (
        <>
            <StringOperator onChangeMode={
                function(e) {
                    console.log('문자열 길이 : ' + e.target.value.length);
                }
            } />
        </>
    );
}