# Ramp Challenge

Thanks for applying to Ramp. Solve this CTF[1] challenge and add the result to your application.

We recommend opening this file with a Markdown viewer. (https://www.google.com/search?q=markdown+viewer)

## Instructions

1. Open this [link](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge)
2. Find a hidden URL within the HTML
   - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
   - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result. See example.
   - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
   - Any additional attribute that doesn't interfere with the described pattern can be safely ignored

Pattern of the DOM tree for each valid character of the URL

```html
<section id="11*">
  <!-- Zero or more DOM nodes -->
  <main id="*22">
    <!-- Zero or more DOM nodes -->
    <article id="*33*">
      <!-- Zero or more DOM nodes -->
      <p class="flag" value="VALID_CHARACTER"></p>
      <!-- Zero or more DOM nodes -->
    </article>
  </main>
  <!-- Zero or more DOM nodes -->
</section>
```

Example of a valid pattern

```html
<!-- Tag is `section` and id starts with 11 -->
<section id="11gxgeksbp9d">
  <!-- Tag is `main` and id ends with 22 -->
  <main id="6xb5nzfqqw22">
    <!-- Tag is `article` and id ends with 33 -->
    <article id="ndd6l335">
      <!-- Tag is `p` and contains class `flag` -->
      <!-- `h` is a valid character from the URL  -->
      <p class="flag" value="h"></p>
    </article>
  </main>
</section>
```

(_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)

3. Create a CodeSandbox React application
4. Make an HTTP request to URL obtained in step 2 to load the flag into a React component
   - Don't use any external libraries. Use browser APIs
   - Render a "Loading..." text while the request is ongoing
5. Render the flag you loaded in step 4 with the following conditions:
   - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._
   - No style required
   - Render the flag a list, where each character is a list item
   - Animation should trigger after you load the flag
   - Animation should run only once
   - Use React APIs only. Don't use CSS or external libraries

Bonus: Add as a comment the script you used to to get the URL in step 2

## Submission

Paste the flag you captured in step 2 and the link to your CodeSandbox in the job application with the following format:

`<FLAG> - <LINK>`

We're aware answers here might eventually be leaked and we'll probably have to refresh this every couple months or so, but please keep in mind it'll be very easy to tell once that happens and will only result in slowing down our ability to process applications - so please keep the result to yourself.

\[1\]: https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)
