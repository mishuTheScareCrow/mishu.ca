export default function NotFound() {
  let dummyHtml1 = "<html>";
  let dummyHtml2 = "<style>";
  let dummyHtml3 = "*{";
  let dummyHtml4 = "</style>";
  let dummyHtml5 = "<body>";
  let dummyHtml6 = "</body>";
  let dummyHtml7 = "</html>";
  return (
    <div className="container">
      <div className="not-found-page">
        <div className="error">
          <div className="wrap">
            <div className="404">
              <pre>
                <code>
                  <span className="green">&lt;!</span>
                  <span>DOCTYPE html</span>
                  <span className="green">&gt;</span>
                  <br />
                  <span className="orange">{dummyHtml1}</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="orange">{dummyHtml2}</span>
                  <br />
                  &nbsp;&nbsp;
                  {dummyHtml3}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  <span className="green">everything</span>:<span className="blue">awesome</span>;
                  <br />
                  &#125;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="orange">{dummyHtml4}</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="orange">{dummyHtml5}</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; ERROR 404! FILE NOT FOUND!
                  <br />
                  <span className="comment">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &lt;!--The file you are looking for,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is
                    not where you think it is.--&gt;
                  </span>
                  <span className="orange" />
                </code>
              </pre>
            </div>
            <code>
              <br />
              <span className="info">
                <br />
                &nbsp;&nbsp;
                <span className="orange">{dummyHtml6}</span>
                <br />
                <span className="orange">{dummyHtml7}</span>
              </span>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
