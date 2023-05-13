import React from "react";
import style from "./TFCASB.module.css";

function TFCASB() {
  return (
    <div className={style.container}>
      <section className={style.intro}>
        <p className="my-4">
          Creating a budget is a critical aspect of managing your finances,
          whether you're an individual or a business owner. A well-planned
          budget can help you save money, reduce debt, and achieve your
          financial goals. In this article, we'll provide some tips for creating
          a successful budget that works for you.
        </p>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>1. Track Your Income and Expenses</h2>
        <p className="my-4">
          The first step in creating a budget is to track your income and
          expenses. This will give you a clear picture of where your money is
          coming from and where it's going. To do this, you can use a simple
          spreadsheet or budgeting software. Be sure to include all sources of
          income, such as your salary, bonuses, and investment income, as well
          as all expenses, such as rent, utilities, groceries, and
          entertainment.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVkZ2V0JTIwc3ByZWFkc2hlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Sample budget spreadsheet"
            title="Sample budget spreadsheet"
          />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>2. Set Realistic Goals</h2>
        <p className="my-4">
          When creating a budget, it's essential to set realistic goals for your
          finances. This might include paying off debt, saving for a down
          payment on a house, or building an emergency fund. Be sure to
          prioritize your goals based on their importance and feasibility and
          adjust your budget accordingly.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://media.istockphoto.com/id/155383344/photo/female-hand-dropping-euro-into-half-full-piggy-bank.jpg?s=612x612&w=0&k=20&c=6XR5GZk8lc1S0zyzL-kacr770m_-TBAMYRW_bYQnU10="
            alt="Piggy bank with coins"
            title="Piggy bank with coins"
          />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>3. Reduce Unnecessary Expenses</h2>
        <p className="my-4">
          One of the most effective ways to create a successful budget is to
          reduce unnecessary expenses. This might include cutting back on dining
          out, canceling subscription services you don't use, or finding cheaper
          alternatives for your daily expenses. Be honest with yourself about
          what you can live without and be willing to make sacrifices in the
          short-term for long-term financial stability.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://media.istockphoto.com/id/1399582890/photo/woman-comparing-products-at-the-supermarket.jpg?s=612x612&w=0&k=20&c=Yk6fjb0e9hL4979pz4rX8RVH2EKaclivotOuMjUOjKE="
            alt="Comparison of grocery prices"
            title="Comparison of grocery prices"
          />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>4. Build in a Buffer</h2>
        <p className="my-4">
          When creating a budget, it's important to build in a buffer for
          unexpected expenses. This might include emergency repairs, medical
          bills, or car maintenance. Aim to set aside at least 10% of your
          income for these expenses so you're prepared when the unexpected
          happens.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://media.istockphoto.com/id/1156822890/photo/male-hand-depositing-some-extra-money-in-future-needs.jpg?s=612x612&w=0&k=20&c=TNQRN8xG6gdHgR6oBgi2xopxenLDq1N7Py6IPOSJ5nw="
            alt="Emergency fund jar"
            title="Emergency fund jar"
          />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>
          5. Review and Adjust Your Budget Regularly
        </h2>
        <p className="my-4">
          Finally, it's important to review and adjust your budget regularly.
          Your income and expenses may change over time, and your goals may
          shift as well. Be willing to revisit your budget at least once a month
          to ensure you're on track and make adjustments as needed.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://media.istockphoto.com/id/1420915331/photo/2023-block-over-2022-and-2021-wooden-building-on-table-background-business-planning-risk.jpg?s=612x612&w=0&k=20&c=1IneVmZssJAPqlbqh2NekaYwKiMQZ3z5EFcy2eSXBlk="
            alt="Calendar with budget review date"
            title="Calendar with budget review date"
          />
        </div>
      </section>

      <section className={style.conclusion}>
        <p className="my-4">
          By following these tips, you can create a successful budget that helps
          you achieve your financial goals. Remember to be patient, stay
          disciplined, and be willing to adjust your budget as needed to keep
          yourself on track. With a little effort, you'll be on your way to
          financial stability and success.
        </p>
      </section>

    </div>
  );
}

export default TFCASB;