/**
 * @Author Jake Seo
 * @returns string json 문자열
 *
 * Form 의 ID 를 집어서 해당 form 내부에 있는
 * 데이터를 JSON 문자열 형태로 반환한다.
 */
function getJson(formId) {
  return JSON.stringify(
    Object.fromEntries(new FormData(document.getElementById(formId)))
  );
}
