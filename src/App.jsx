import './App.css';
import Card from './Card';

function App() {
  const data = [
    'https://i.ytimg.com/vi/6TQm7EZHzXI/mqdefault.jpg',
    'http://about-windows.ru/wp-content/uploads/2021/10/gemini-man.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxy8qkZ83kGYZwprraPBm_hHjqaet4r2rQAiw96LRJK331zug1mf0cGJSlCiei11Qw2WXSuIuQncswVf5MnN0MVotJ6CyzWzHlZeGaCGxzp1TVWupmSVhu06xCKrrmX0S3viUB5PfdtB6-FiRf1nWJ1rKQ99uRKb_iUBeWA7CUFnE_7C-WGkPDooFIIQ/w400-h266/blackhat.jpg',
    'https://www.themoviescene.co.uk/reviews/_img/9212-2.jpg',
  ];

  return (
    <div className="wrapperApp">
      {[0, 1, 2, 3].map((i, idx) => {
        return (
          <Card key={idx}>
            <img src={data[idx]} alt="" className="cardImg" />
          </Card>
        );
      })}
      {[0, 1, 2, 3].map((i, idx) => {
        return (
          <Card key={idx}>
            {/* <img src={data[idx]} alt="" className="cardImg" /> */}
          </Card>
        );
      })}
    </div>
  );
}

export default App;
