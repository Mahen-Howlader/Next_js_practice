
import page from './contact/page';
export default function Home() {
  return (
    <main className="px-20">
      <h1 className="font-bold text-3xl text-start text-red-700">Next. js is worth considering over plain React when you need server-side rendering, static site generation, simplified routing, improved performance, or built-in features for your web application. However, if your application requires high customization, sticking with React alone might be more appropriate.</h1>
      <p>Old, slow mobile devices started giving up - load times became high, there was more lag, JS engines were less powerful, and there was just so much JavaScript to parse!

        With frameworks like React and Angular, you're basically pushing huge JavaScript bundles to clients which first have to download the small HTML pages.

        Web developers who moved from the PHP age (server-rendered HTML) to the JavaScript age (client rendered HTML) soon started realizing that they screwed up big time.

        React was great for interactivity and high-performance components, but the fact that people starting using these tools to build everything started to create problems for clients.

        A simple About Us page, which could be a very simple static HTML/CSS page, was now a page with a whopping JS bundle. The browser first had to download, then parse, then execute, and then change the DOM to display the content.

        This was bad for everyone. Clients had higher load times. Browsers had to work hard to run JS (browsers parse and run HTML/CSS very efficiently). And search engines like Google and Bing had a hard time understanding what your page was about, because your source code never contained the real content. It was always embedded somewhere in your JS bundle.

        People loved React and similar tools. But they also understood the implications of running too much JS client-side.

        On the other hand, theydffds  loved how PHP worked, but they didn't like its architecture. So what was the solution?</p>
    </main>
  );
}
