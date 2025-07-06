import CalloutBox from "@/components/CalloutBox";
import MathBlock from "@/components/MathBlock";
export default function RSAArticle() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose prose-blue">
      <h1>Understanding RSA</h1>
      <p>
        RSA is one of the first public-key encryption algorithms used and, for
        this reason, serves very well as a pedagogical example to the curious
        reader who wants to explore <strong>cryptography</strong>.
      </p>
      <p>
        In this post I intend to focus more on the mathematical side of it,
        specifically <strong>number theory</strong>.
      </p>
      <p>
        Let's begin by understanding the system. RSA uses a pair of keys: one
        <strong>public</strong>, which can be shared openly, and one
        <strong>private</strong>, which must be kept secret by its owner.
      </p>
      <p>
        The standard example involves Bob and Alice exchanging messages. Since
        they want to encrypt their communication using RSA, each of them has a
        key pair.
      </p>
      <p>
        Secure of the system, Alice wants to send a message to Bob. She uses
        Bob’s <strong>public key</strong> to <strong>encrypt</strong> the
        message.
      </p>
      <p>
        At this point Bob,
        <u>and Bob only</u>, will then be able to <strong>decrypt</strong> the
        message and read it, by using his private-key
      </p>
      <p>
        The security of this system relies on the fact that Bob’s private key is
        known only to him. The algorithm ensures that messages encrypted with
        the public key can only be decrypted using the corresponding private key
        in a mathematically elegant and fascinating way.
      </p>
      <p>
        Generating such public/private key pairs involves fundamental number
        theory concepts, particularly <strong>prime numbers</strong>. You may
        recall that a prime number is a number divisible only by itself and 1.
      </p>
      <p>
        Generating such public/private key pairs involves fundamental number
        theory concepts, particularly <strong>prime numbers</strong>. You may
        recall that a prime number is a <strong>natural number</strong>
        (positive integer) greater than 1 and divisible only by itself and 1.
      </p>
      <CalloutBox type="example" title="Prime factorization">
        3 and 7 are prime numbers, while 21 is not. It can be expressed as a
        product of primes: 3 × 7.
      </CalloutBox>
      <p>
        The primes are the atoms of natural numbers. Each natural number can be
        constructed as a product of primes (factorization). This factorization
        is unique, up to the order of the factors.
      </p>
      <CalloutBox type="example" title="Prime factorization">
        <MathBlock latex="21 = 3 \times 7" displayMode={false} />
      </CalloutBox>
      <p>
        This is stated as an important <strong>theorem</strong> called{" "}
        <strong>Fundamental Theorem of Arithmetic</strong> or{" "}
        <strong>Unique Factorization Theorem</strong>, in short{" "}
        <strong>UFT</strong>.
      </p>
      <CalloutBox type="theorem" title="Unique Factorization Theorem">
        Every natural number can be uniquely factorized, (up to ordering) by
        it's
        <strong>prime facrtors</strong>
      </CalloutBox>
      <CalloutBox type="remark" title="">
        Notice that 1 is not a included in the statement of the theorem, as it
        can be seen as a product of no primes.
      </CalloutBox>
      Here another example of prime factorization:
      <CalloutBox type="example" title="Prime factorization">
        <MathBlock latex="6615 = 3^3 \times 7^2 \times 5" displayMode={false} />
      </CalloutBox>
      Let's get back to the key generation process. The RSA algorithm generates
      a pair of keys using the following steps:
      <CalloutBox type="definition" title="RSA Key Generation">
        <ol>
          <li>
            Choose two primes: <code>p</code> and <code>q</code>
          </li>
          <li>
            Compute <code>n = p × q</code>
          </li>
          <li>Compute φ(n) = (p−1)(q−1)</li>
          <li>
            Choose <code>e</code> such that <code>1 &lt; e &lt; φ(n)</code> and
            <code>gcd(e, φ(n)) = 1</code>
          </li>
          <li>
            Find <code>d</code> such that <code>e × d ≡ 1 mod φ(n)</code>
          </li>
        </ol>
      </CalloutBox>
      <p>
        This is probably not very clear, since i haven't most of concepts. Let's
        break it down step by step.
      </p>
      <h2>Step 1: Choose two primes</h2>
      <p>
        The first step is to choose two distinct prime numbers, <code>p</code>
        and <code>q</code>. These primes should be large enough (at least 20
        digits) to ensure the security of the RSA system. The larger the primes,
        the more secure the key pair will be. Is indeed notoriusly difficult to
        factorize the product of two large primes, which is the basis of RSA's
        security. This fact migh be problematicin quantum computing.
      </p>
      <h2>
        Step 2: Compute <code>n = p × q</code>
      </h2>
      <p>
        In this simple <code>n</code> will be the private key, p and q are must
        be kept secret.
      </p>
      <h2>
        Step 3: Compute <code>φ(n) = (p−1)(q−1)</code>
      </h2>
      <p>
        Now here it's where things get more complicated. We introduce{" "}
        <code>φ(n)</code> called the <strong>Euler's totient function</strong>{" "}
        and it counts the number of integers up to <code>n</code> that are
        coprime to <code>n</code>.
      </p>
      <CalloutBox type="definition" title="Euler's totient function">
        Given a positive integeer n, the totient function φ(n), counts the
        number of integers from 0 to n-1 that are coprime to <code>n</code>. By
        convention φ(1) = 1.
      </CalloutBox>
      <CalloutBox type="example" title="">
        <code>φ(12) = 4</code>. Since the integers 1, 5, 7, and 11 are coprime
        to 12.
      </CalloutBox>
      <p>
        Ok wait but what does it mean to be coprime? Well for now we can say
        that two positive integers are <strong>coprime</strong> if they have no
        common prime factors other than 1.
      </p>
      <p>
        In particular if <code>n</code> is a prime number, then{" "}
        <code>φ(n) = n - 1</code>. Why?
      </p>
      <p>
        Morover if p and q are coprime (notice that our p and q are distinct
        primes), it follows that <code>φ(n) = (p−1)(q−1)</code>. Concluding
        review os step 3.
      </p>
      <h2>
        Step 4: Choose <code>e</code> such that <code>1 &lt; e &lt; φ(n)</code>{" "}
        and syuch that e is coprime to <code>φ(n)</code>(
        <code>gcd(e, φ(n)) = 1</code>)
      </h2>
      <p>
        Chooding <code>e</code> such that <code>1 &lt; e &lt; φ(n)</code> should
        be clear. Anyway, in order to determine that this two positive integers
        are coprime, we introduce the gcd and claim two integers are coprime iff
        (<code>gcd(e, φ(n)) = 1</code>
        ).
      </p>
      <CalloutBox type="definition" title="GCD">
        The <strong>greatest common divisor</strong> (gcd) of two integers is
        the largest positive integer that divides both numbers without leaving a
        remainder.
      </CalloutBox>
      <CalloutBox type="example" title="GCD">
        The gcd of 12 and 15 is 3, since 3 is the largest number that divides
        both without a remainder.
      </CalloutBox>
      To compute the gcd of two integers, we can use the{" "}
      <strong>Euclidean algorithm</strong> descibed in "Elements" around 300 BC
      (yesd one of the oldest and still useg algorithm), It's an efficient
      method for finding the gcd of two numbers. The algorithm is based on the
      principle that the gcd of two numbers also divides their difference and
      thus i a recursive algorithm! The algorithm works as follows:
      <ol>
        <li>
          Take two integers <code>a</code> and <code>b</code>.
        </li>
        <li>
          If <code>b</code> is 0, then the gcd is <code>a</code>.
        </li>
        <li>
          Otherwise, replace <code>a</code> with <code>b</code> and{" "}
          <code>b</code>
          with <code>a % b</code> (the remainder of the division of
          <code>a</code> by <code>b</code>).
        </li>
        <li>
          Repeat steps 2 and 3 until <code>b</code> becomes 0.
        </li>
      </ol>
      <p>
        The gcd is the last non-zero remainder, which is the largest positive
        integer that divides both <code>a</code> and <code>b</code>.
      </p>
      <pre>
        <code>
          {`function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}`}
        </code>
      </pre>
      <p>Now we can thus define when two integers are coprime:</p>
      <CalloutBox type="definition" title="Coprime">
        Two integers are coprime if their greatest common divisor (gcd) is 1.
      </CalloutBox>
      <CalloutBox type="example" title="Coprime">
        The integers 8 and 15 are coprime because their gcd is 1, meaning they
        have no common prime factors.
      </CalloutBox>
    </main>
  );
}
