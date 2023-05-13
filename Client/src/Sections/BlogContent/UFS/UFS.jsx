import style from "./UFS.module.css";

function UFS() {
  return (
    <div className={style.container}>
      
      <section className={style.intro}>
        <p className="my-4">
          As a small business owner, you may have heard the term "financial
          statements" thrown around, but do you really know what they are and
          why they're important? In this beginner's guide, we'll break down the
          basics of financial statements and explain how they can help you make
          informed decisions for your business.
        </p>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>What are Financial Statements?</h2>
        <p className="my-4">
          Financial statements are documents that summarize a company's
          financial performance and position over a specific period of time.
          They provide a snapshot of a business's financial health and are used
          by owners, investors, and lenders to evaluate its viability.
        </p>
        <h2 className={style.title}>
          There are three main types of financial statements:
        </h2>
        <p className="my-4">
          <span className={style.mini}>1. Income Statement: </span>This
          statement shows a company's revenue and expenses over a period of
          time, typically a year. It helps owners and investors understand how
          much profit or loss a business has generated.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://img.freepik.com/free-photo/closeup-business-man-checking-tax-invoice-paper_53876-14800.jpg?size=626&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=ais"
            alt="A sample income statement"
            title="A sample income statement"
          />
        </div>

        <p className="my-4">
          <span className={style.mini}>2. Balance Sheet: </span>This statement
          shows a company's assets, liabilities, and equity at a specific point
          in time. It helps owners and investors understand the value of a
          business and its financial position.
        </p>

        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://t3.ftcdn.net/jpg/04/06/50/70/240_F_406507084_66hE8ll90BtFpbu78DYKviyrhnzEI4sF.jpg"
            alt="Balance sheet"
            title="Balance sheet"
          />
        </div>

        <p className="my-4">
          <span className={style.mini}>3. Cash Flow Statement: </span>This
          statement shows the cash inflows and outflows of a business over a
          period of time, typically a year. It helps owners and investors
          understand how a business generates and uses cash.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://t4.ftcdn.net/jpg/00/99/33/15/240_F_99331505_GS8v7iLGxgGhzUTAMrVOxcgnt7sJ37t9.jpg"
            alt="Cash flow statement"
            title="Cash flow statement"
          />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>Why are Financial Statements Important?</h2>
        <p className="my-4">
          Financial statements are important for several reasons. They help you:
        </p>

        <p className="my-4">
          <span className={style.mini}>1. Make informed decisions: </span>
          Financial statements provide valuable information that can help you
          make informed decisions about investing, lending, and other financial
          transactions.
        </p>

        <p className="my-4">
          <span className={style.mini}>2. Monitor performance: </span> By
          tracking changes in the financial statements over time, you can
          monitor a company's financial performance and identify potential
          issues or areas for improvement.
        </p>

        <p className="my-4">
          <span className={style.mini}>3. Meet legal requirements: </span>
          Meet legal requirements: Companies are required by law to prepare and
          file financial statements with regulatory bodies, such as the
          Securities and Exchange Commission (SEC) in the United States.
        </p>

       
      </section>

      <section className={style.point}>
        <h2 className={style.title}>How to Read Financial Statements</h2>
        <p className="my-4">
          Reading financial statements can be intimidating, but with a little
          practice, it becomes easier. Here are some tips for interpreting
          financial statements:
        </p>

        <p className="my-4">
          <span className={style.mini}>1. Look for trends : </span>Compare
          financial statements from different periods to identify trends in
          revenue, expenses, and profits.
        </p>

        <p className="my-4">
          <span className={style.mini}>2. Analyze ratios: </span>Use financial
          ratios to analyze the relationship between different financial
          statement items. For example, the debt-to-equity ratio can help you
          understand a business's leverage.
        </p>

        <p className="my-4">
          <span className={style.mini}>3. Understand accounting methods: </span>
          Financial statements can be affected by the accounting methods used.
          Make sure you understand the methods being used to create the
          statements.
        </p>

        <p className="my-4">
          <span className={style.mini}>4. Ask for help: </span>Don't be afraid
          to seek the advice of an accountant or financial professional if you
          need help interpreting financial statements.
        </p>
      </section>

      <section className={style.conclusion}>
        <p className="my-4">
          Understanding financial statements is a key component of financial
          literacy. By learning how to read and interpret financial statements,
          you can make informed decisions about your investments and financial
          transactions. As a business owner, financial statements can help you
          monitor your company's performance and make strategic decisions to
          improve its financial health.
        </p>
      </section>
    </div>
  );
}

export default UFS;
