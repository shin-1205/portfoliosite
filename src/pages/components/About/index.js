import Typewriter from 'typewriter-effect';

export default function () {
  return (
    <>

      <section className='hero'>

        <div className='container'>



          <div className='left' />

          <div className='left2' />
          <div className='left3' />



          <div className='right'>

            <div>
              <Typewriter
                options={{
                  strings: [
                    'まずはじめに、ポートフォリオをご覧いただき、誠にありがとうございます。<br><br>僕は、シンガポールで18年間生活した後、日本へ移住しました。<br>日本語は高校入学後に習得し、英検1級を所持しております。<br><br>現在はフロントエンド技術に興味があり、HTML CSS JavaScript を中心に学んでおります。<br/>PHPも少し分かります！'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

        </div>

      </section>

    </>
  )
}