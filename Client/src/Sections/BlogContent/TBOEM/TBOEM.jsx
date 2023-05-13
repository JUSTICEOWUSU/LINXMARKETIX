import React from "react";
import style from "./TBOEM.module.css";

function TBOEM() {
  return (
    <div className={style.container}>
      <section className={style.intro}>
        <p className="my-4">
          As a business owner, you're always looking for ways to connect with
          your customers and promote your products or services. One powerful
          tool that can help you achieve these goals is email marketing. Email
          marketing involves sending promotional emails to a list of subscribers
          who have opted in to receive communications from your business. In
          this article, we'll explore the many benefits of email marketing and
          why it's essential for your business.
        </p>

        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img 
          src="https://img.freepik.com/premium-vector/business-technology_18591-32650.jpg?size=626&ext=jpg&ga=GA1.1.1594462479.1678118375&semt=ais"
          alt="Email Marketing is Cost-Effective" />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>1. Email Marketing is Cost-Effective</h2>
        <p className="my-4">
          One of the biggest advantages of email marketing is that it's
          incredibly cost-effective. Unlike traditional advertising methods,
          which can be expensive and time-consuming, email marketing allows you
          to reach a large audience for a relatively low cost. You don't need to
          worry about printing costs, postage fees, or other expenses associated
          with traditional advertising methods. With email marketing, you can
          create and send professional-looking emails in just minutes, and you
          can do it all from the comfort of your own office or home.
        </p>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>2. Email Marketing is Highly Targeted</h2>
        <p className="my-4">
          Another benefit of email marketing is that it's highly targeted. When
          you send promotional emails to your subscribers, you're reaching
          people who have already expressed an interest in your products or
          services. This means that your emails are more likely to be opened and
          read, and you'll be more likely to see a high conversion rate as a
          result. You can also segment your email list based on factors like
          age, location, interests, and more, which allows you to create highly
          targeted campaigns that are tailored to the needs and preferences of
          your subscribers.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW1haWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Email Marketing is Highly Targeted"
          />
        </div>
      </section>
      <section className={style.point}>
        <h2 className={style.title}>3. Email Marketing is Measurable</h2>
        <p className="my-4">
          One of the great things about email marketing is that it's highly
          measurable. With email marketing software, you can track a wide range
          of metrics, including open rates, click-through rates, conversion
          rates, and more. This allows you to see how your campaigns are
          performing and make adjustments as needed to improve your results. You
          can also use A/B testing to try out different variations of your
          emails and see which ones are more effective.
        </p>
        
      </section>

      <section className={style.point}>
        <h2 className={style.title}>4. Email Marketing is Customizable</h2>
        <p className="my-4">
          Another advantage of email marketing is that it's highly customizable.
          You can create a wide range of emails, from promotional messages to
          newsletters to product updates and more. You can also tailor your
          emails to different segments of your audience based on factors like
          their interests, location, and behavior. This allows you to create
          more personalized and engaging campaigns that are more likely to
          resonate with your subscribers.
        </p>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>5. Email Marketing is Easy to Automate</h2>
        <p className="my-4">
          Finally, email marketing is incredibly easy to automate. With the
          right email marketing software, you can set up automated campaigns
          that send targeted messages to your subscribers based on their
          behavior. For example, you can set up a welcome series that sends a
          series of emails to new subscribers, or you can send targeted messages
          to subscribers who have abandoned their shopping carts on your
          website. This allows you to stay in touch with your subscribers and
          keep your business top of mind without requiring a lot of time and
          effort.
        </p>
        <div className={style.img} data-aos="fade-left" data-aos-duration="1000">
          <div className={style.blend}></div>
          <img
            src="https://media.istockphoto.com/id/1047319192/photo/software-development-for-digital-marketing-via-multichannel-communication-network-icon-on.jpg?b=1&s=170667a&w=0&k=20&c=iLgwgMtjOXuczkYtgZtu1ZFwXIZ0gp5QwCbxayQ7fyg="
            alt="Email Marketing Example"
            class="blog-image"
          />
        </div>
      </section>

      <section className={style.point}>
        <h2 className={style.title}>Conclusion</h2>
        <p className="my-4">
          Email marketing is a powerful tool for businesses of all sizes to
          engage with their audience and drive conversions. By utilizing
          effective strategies such as personalization, segmentation,
          automation, and A/B testing, businesses can create impactful email
          campaigns that deliver results. With the right approach, email
          marketing can help businesses build stronger relationships with their
          audience, increase brand awareness, and drive revenue growth.
        </p>
      </section>
    </div>
  );
}

export default TBOEM;
