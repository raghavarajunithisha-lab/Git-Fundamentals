const CHAPTER_CONTENT = {};

CHAPTER_CONTENT["1.0"] = `
<div class="content-block">
<h2>👋 Welcome to Git Fundamentals!</h2>
<p>This is an <strong>interactive, story-driven guide</strong> designed to teach you version control using simple, real-world analogies. No boring textbooks, no memorizing commands by heart.</p>
<p>We believe the best way to learn Git is by <strong>understanding why each command exists</strong>, not by cramming syntax. Every chapter uses everyday examples, like saving game progress, packing a school backpack, or collaborating on a group project, to make complex ideas click naturally.</p>
</div>

<div class="content-block">
<h2>🎯 Who is this for?</h2>
<ul>
  <li><strong>Complete Beginners:</strong> You've never heard of Git and want to learn the basics from zero. No prior knowledge needed.</li>
  <li><strong>Confused Learners:</strong> You've seen Git commands before but never understood <em>why</em> there are so many or what each one actually does. This guide will finally make it all make sense.</li>
</ul>
</div>

<div class="content-block">
<h2>📖 How to Use This Guide</h2>
<ul>
  <li>📚 <strong>Read each chapter in order</strong>. They build on each other like levels in a game.</li>
  <li>💻 <strong>Try every command</strong>. Open your terminal and follow along. Reading alone won't make it stick.</li>
  <li>✅ <strong>Mark chapters complete</strong>. Track your progress as you go.</li>
  <li>🔁 <strong>Come back anytime</strong>. Use this as a reference whenever you forget a command.</li>
</ul>
<p>Ready? Let's jump into <strong>Chapter 1.1</strong> and discover why version control exists! 🚀</p>
</div>
`;

CHAPTER_CONTENT["1.1"] = `
<div class="content-block">
<h2>🎬 The Story: Why Version Control Exists</h2>
<div class="callout story">
<div class="callout-title">📖 Imagine This...</div>
<p>You're writing a big school report or building a cool coding project. You save it as <code>science_project.docx</code>. Then you make some changes and save it as <code>science_project_v2.docx</code>. Soon, your folder is cluttered with files like <code>science_project_ACTUALLY_final.docx</code> and <code>science_project_final_FINAL_real.docx</code>! Sound familiar? Now imagine 500 game developers trying to build a game together, saving files like that. It would be total chaos! That is exactly the problem version control solves.</p>
</div>
</div>

<div class="content-block">
<h2>🧠 What is Version Control?</h2>
<p>Version control is like a <strong>super-powered time machine</strong> for your project files. It is a system that records changes to your files over time, so you can go back to any previous version whenever you want. Think of it as an <strong>infinite undo button</strong>!</p>
<p>For every change made to your files, it keeps track of four simple things:</p>
<ol>
<li><strong>Who</strong> made the change? (Which developer or teammate did it?)</li>
<li><strong>What</strong> was changed? (Which lines of code were added or deleted?)</li>
<li><strong>When</strong> was it changed? (The exact date and time)</li>
<li><strong>Why</strong> was it changed? (Written down in a short note called a commit message).</li>
</ol>
</div>

<div class="content-block">
<h2>📊 Two Ways to Save History</h2>
<p>Over the years, developers have used two main ways to save and share project history:</p>

<div class="visual-diagram">
<div class="diagram-title">The Evolution</div>
<div class="git-flow">
<div class="flow-box flow-staging">The Old Way<br><small>Centralized (e.g., SVN)</small></div>
<div class="flow-arrow">→</div>
<div class="flow-box flow-local">The Modern Way<br><small>Distributed (e.g., Git)</small></div>
</div>
</div>

<h3>1. The Old Way: The Single School Whiteboard (Centralized)</h3>
<p>Imagine a class working on a presentation together, but there is only one whiteboard in the school. If you want to write your part, you have to walk to that room, check if anyone else is drawing, and make your changes. If the school closes (the server goes down), or if someone accidentally spills juice on the whiteboard, all your hard work is gone forever!</p>

<h3>2. The Modern Way: Personal Notebooks (Distributed)</h3>
<p>This is how Git works. Instead of sharing a single whiteboard, <strong>every student gets their own complete, identical notebook containing the entire project history.</strong></p>
<ul>
<li><strong>Works Offline:</strong> You can write code and save versions while in a car, in an airplane, or when the Wi-Fi is down. Your notebook lives right on your computer.</li>
<li><strong>Super Fast:</strong> Since you don't need to ask the internet to see your project's history, searching through past work takes less than a second!</li>
<li><strong>Double Safe:</strong> If the main server crashes or explodes, it doesn't matter. Any team member can copy the complete history from their laptop to restore everything perfectly.</li>
</ul>
</div>

<div class="content-block">
<h2>⚡ Git Under the Hood: Snapshots, Not Differences</h2>
<p>To understand how Git remembers your project, let's look at how other systems save files.</p>

<h3>The Old Way: The Instruction List (Deltas)</h3>
<p>Older backup systems only saved the difference from the last save. For example:</p>
<ul>
<li><strong>Save 1:</strong> You save Chapter 1.</li>
<li><strong>Save 2:</strong> You fix a typo. The system only saves: <em>"On line 3, change the word 'apple' to 'orange'."</em></li>
</ul>
<p>If you want to view Save 100, the system has to read Save 1, then apply 99 instructions one by one to recreate the file. This can be slow and easily broken if one instruction gets corrupted!</p>

<h3>Git's Way: The Photo Album (Snapshots)</h3>
<p>Git works like a digital camera taking pictures of your project.</p>
<ul>
<li><strong>Save 1:</strong> Git takes a photo of all your files.</li>
<li><strong>Save 2:</strong> You edit a file. Git takes a completely new photo of your whole project.</li>
</ul>
<p>If you want to view Save 2, Git doesn't run calculations; it just hands you the photograph. It is instant and extremely reliable!</p>

<div class="callout story">
<div class="callout-title">💡 But wait, doesn't that take up too much space?</div>
<p>Git is super smart! If you have 10 files and you only edit one of them, Git doesn't take a new picture of all 10. It takes a picture of the edited file, and for the other 9, it just points to the pictures it already took in Save 1. This keeps your project folder tiny and efficient.</p>
</div>

<h2>🔍 What does "Checksummed" mean?</h2>
<p>Think of a checksum as a unique **digital fingerprint** for a file.</p>
<p>Just like how your physical fingerprint uniquely identifies you, a checksum (specifically, an SHA-1 hash) is a string of 40 letters and numbers (like <code>2fd4e1c67a2d28fced849ee1bb76e7391b93eb12</code>) that is calculated by reading every single character in a file.</p>

<h3>How Git uses Fingerprints:</h3>
<ul>
<li><strong>No Hacking:</strong> When Git saves a file, it reads every character and creates a fingerprint.</li>
<li><strong>Tracking:</strong> Git names files internally using their fingerprints.</li>
<li><strong>Safety Lock:</strong> If a file is changed by even one single space or comma, its fingerprint changes completely.</li>
</ul>

<div class="callout best">
<div class="callout-title">✅ Perfect Safety (Data Integrity)</div>
<p>Because Git uses these fingerprints for everything, it's impossible for files to get damaged, lost, or secretly edited without Git noticing.</p>
<ul>
<li>If a hard drive glitch alters a '0' to a '1' in your file, the fingerprint will mismatch, and Git will say: "Hey, this file is corrupted!"</li>
<li>If someone tries to sneak bad code into a previous save, the fingerprint of the file changes, which breaks the history chain. Git will block it immediately.</li>
</ul>
<p><strong>In short: Checksumming is like a security guard that guarantees your code is 100% safe and exactly how you left it.</strong></p>
</div>
</div>

<div class="content-block">
<h2>🧩 The Three Stages of Saving in Git</h2>
<p>When you want to save a change in Git, your files go through three different stages. Master these three stages, and you've mastered Git!</p>

<div class="visual-diagram">
<div class="diagram-title">The Three Stages</div>
<div class="git-flow">
<div class="flow-box flow-working">1. Working Directory<br><small>Your Sandbox (Editor)</small></div>
<div class="flow-arrow">select →</div>
<div class="flow-box flow-staging">2. Staging Area<br><small>Your Packing Box</small></div>
<div class="flow-arrow">save →</div>
<div class="flow-box flow-local">3. Repository<br><small>Your Locked Vault</small></div>
</div>
</div>

<ul>
<li><strong>1. Working Directory (The Sandbox):</strong> This is your active play zone. It contains the actual files you are currently writing, editing, and debugging in your code editor (like VS Code).</li>
<li><strong>2. Staging Area (The Packing Box):</strong> Before you seal a package, you choose which items to put inside. The Staging Area is your virtual box. You select only the files you want to include in your next save point.</li>
<li><strong>3. Repository (The Locked Vault):</strong> Once your packing box is ready, you lock it and store it in the vault. Git saves this snapshot permanently as a part of your project's official history.</li>
</ul>
</div>


`;

CHAPTER_CONTENT["1.2"] = `
<div class="content-block">
<h2>🎬 Starting Your First Project (init & clone)</h2>

<div class="callout story">
<div class="callout-title">📦 What is a "Repository"?</div>
<p>A <strong>repository</strong> (or "repo" for short) is just a smart folder. It holds all your project files (like text, images, and code), but it also has a perfect memory of every change ever made to those files. It's a digital time capsule for your project.</p>
<p>You will work with two types of these smart folders:</p>
<ul>
  <li><strong>Local Repository:</strong> The folder living right now on your personal computer.</li>
  <li><strong>Remote Repository:</strong> A backup copy of that folder living on the internet (like on GitHub.com) so your friends can see it and add their work to it.</li>
</ul>
</div>

<p>Every Git journey starts with either creating a brand new smart folder, or downloading an existing one from the internet.</p>
<p>But before you can share your work on the internet (GitHub) for the first time, you need two things: <strong>Your Name Tag</strong> and <strong>Your VIP Pass</strong>.</p>
</div>

<div class="content-block">
<h2>🤔 Setting Up: The Name Tag vs. The VIP Pass</h2>
<p>Imagine you drew a cool picture and want to hang it in the school museum. The school needs two pieces of information from you:</p>

<h3>1. Your Name Tag (Git Config)</h3>
<p>Before Git saves your work, it needs to stamp a label on it saying: <em>"Who made this?"</em> This is your Name Tag.</p>
<p>This is just a simple setting on your local computer. It does not verify who you are, it just labels your work so teammates know who to thank (or who to ask questions!).</p>

<h3>2. Your VIP Pass (Authentication)</h3>
<p>When you try to upload your work to a project on GitHub, GitHub asks: <em>"Are you allowed to write code here?"</em> This is Authentication. It's your VIP Pass. It proves you have permission to upload files, using a secure login from your computer.</p>

<div class="callout best">
<div class="callout-title">✅ Simple Mental Model</div>
<ul>
  <li><strong>Git Config (Name Tag):</strong> Stamping your name on your drawing. (Done once on your computer).</li>
  <li><strong>Authentication (VIP Pass):</strong> Having the keycard to enter the museum gallery. (Done with the internet/GitHub).</li>
</ul>
</div>
</div>

<div class="content-block">
<h2>🚀 Complete Step-by-Step Setup (Follow Along!)</h2>
<p>This is the <strong>exact</strong> sequence you will follow, from a brand-new computer to a working Git project. We'll use a student named <strong>Sarah Ahmed</strong> as our example. <em>Replace her details with your own!</em></p>

<div class="callout story">
<div class="callout-title">📋 What You'll Need Before Starting</div>
<ul>
  <li>A computer (Windows, Mac, or Linux)</li>
  <li>An internet connection</li>
  <li>A free GitHub account. If you don't have one, go to <strong>https://github.com</strong> and click <strong>Sign up</strong>. Remember your <strong>email</strong>, <strong>username</strong>, and <strong>password</strong>!</li>
</ul>
</div>
</div>

<div class="content-block">
<h2>📥 Step 1 - Install Git on Your Computer</h2>

<h3>🪟 If you use Windows:</h3>
<ol>
  <li>Open your web browser and go to <strong>https://git-scm.com/downloads/win</strong></li>
  <li>The download should start automatically. If not, click the link for "64-bit Git for Windows Setup".</li>
  <li>Run the downloaded installer (the <code>.exe</code> file).</li>
  <li>Click <strong>Next</strong> on every screen. The default settings are perfect for beginners!</li>
  <li>Click <strong>Install</strong>, then click <strong>Finish</strong>.</li>
</ol>

<h3>🍎 If you use Mac:</h3>
<ol>
  <li>Open <strong>Terminal</strong> (search for "Terminal" using Spotlight with Cmd+Space).</li>
  <li>Type <code>git --version</code> and press Enter.</li>
  <li>If Git is not installed, your Mac will pop up a window asking you to install developer tools. Click <strong>Install</strong>.</li>
</ol>

<h3>✅ Verify it worked. Open your terminal and type:</h3>
<div class="code-block">
<pre><span class="cmd">$ git --version</span></pre>
</div>
<p><strong>👀 What you should see (version numbers might vary):</strong></p>
<div class="code-block">
<pre><span class="output">git version 2.44.0</span></pre>
</div>

<div class="callout best">
<div class="callout-title">💡 Which terminal should I open?</div>
<ul>
  <li><strong>Windows:</strong> Search your Start Menu for <strong>"Git Bash"</strong> (this is a friendly terminal installed alongside Git). You can also use PowerShell.</li>
  <li><strong>Mac:</strong> Open the built-in <strong>Terminal</strong> app (under Applications → Utilities).</li>
</ul>
</div>

<div class="callout story">
<div class="callout-title">❌ Seeing an Error like "git is not recognized"?</div>
<p>Don't panic! It usually just means Git didn't finish configuring. Try closing your terminal window and opening a new one. If that fails, restart your computer. If it still doesn't work, re-download the installer from <strong>git-scm.com</strong> and install it again.</p>
</div>
</div>

<div class="content-block">
<h2>🏷️ Step 2 - Put on Your Name Tag (Git Config)</h2>
<p>Let's tell Git who you are. Remember, this is just a label that gets stamped on your project snapshots. It doesn't create any account, but it's very important!</p>

<h3>Type these two commands (replace with YOUR name and email):</h3>
<div class="code-block">
<pre><span class="cmd">$ git config --global user.name "Sarah Ahmed"</span>
<span class="cmd">$ git config --global user.email "sarah.ahmed@gmail.com"</span></pre>
</div>

<div class="callout best">
<div class="callout-title">⚠️ Important Rules</div>
<ul>
  <li>Put your name inside <strong>double quotes</strong>.</li>
  <li>Make sure your email matches the <strong>exact email address</strong> you used to sign up for GitHub.</li>
  <li>You only need to run these commands <strong>once</strong> on your computer. Git remembers them forever!</li>
</ul>
</div>

<h3>✅ Verify it worked. Type this command:</h3>
<div class="code-block">
<pre><span class="cmd">$ git config --global --list</span></pre>
</div>
<p><strong>👀 What you should see:</strong></p>
<div class="code-block">
<pre><span class="output">user.name=Sarah Ahmed
user.email=sarah.ahmed@gmail.com</span></pre>
</div>
<p>If you see your name and email listed, you are ready to roll! ✅</p>
</div>

<div class="content-block">
<h2>🎫 Step 3 - Connect to GitHub (Get your VIP Pass)</h2>
<p>Your name tag tells Git who you are locally. But when you want to upload code to GitHub, GitHub needs to verify your identity. Let's link your computer to your GitHub account.</p>

<h3>Option A: The Easiest Way - GitHub CLI (Recommended)</h3>

<h4>A1. Install GitHub CLI:</h4>
<ul>
  <li><strong>Windows:</strong> Go to <strong>https://cli.github.com</strong>, click <strong>Download for Windows</strong>, and run the installer.</li>
  <li><strong>Mac:</strong> In your terminal, type: <code>brew install gh</code> (if you have Homebrew installed), or download the installer from <strong>https://cli.github.com</strong>.</li>
</ul>

<h4>A2. Log in. Type this command:</h4>
<div class="code-block">
<pre><span class="cmd">$ gh auth login</span></pre>
</div>

<h4>A3. Answer the terminal prompts exactly like this:</h4>
<div class="code-block">
<pre><span class="output">? What account do you want to log into?</span>  <span class="t-success">→ Choose: GitHub.com</span>
<span class="output">? What is your preferred protocol for Git operations on this host?</span>  <span class="t-success">→ Choose: HTTPS</span>
<span class="output">? Authenticate Git with your GitHub credentials?</span>  <span class="t-success">→ Choose: Yes</span>
<span class="output">? How would you like to authenticate GitHub CLI?</span>  <span class="t-success">→ Choose: Login with a web browser</span></pre>
</div>

<h4>A4. The browser connection:</h4>
<ol>
  <li>The terminal will show you a one-time code (like <code>AB12-CD34</code>). <strong>Copy that code!</strong></li>
  <li>Press Enter, and your web browser will automatically open.</li>
  <li>Paste the code into the browser page and click <strong>Continue</strong>.</li>
  <li>Click the green <strong>Authorize github</strong> button.</li>
  <li>Go back to your terminal, and you should see a success message:</li>
</ol>
<div class="code-block">
<pre><span class="output">✓ Authentication complete.
✓ Logged in as SarahAhmed</span></pre>
</div>

<h3>Option B: Using a Personal Access Token (Alternative)</h3>
<p>If the CLI method doesn't work, you can create a secure key code (token) on GitHub's website. Go to <strong>github.com → Settings → Developer Settings → Personal Access Tokens (classic) → Generate new token</strong>. Give it a name, check the <code>repo</code> box, and copy the long token code. Use this token as your password whenever the terminal asks you to log in!</p>

<h3>✅ Verify your VIP Pass works:</h3>
<div class="code-block">
<pre><span class="cmd">$ gh auth status</span></pre>
</div>
<p><strong>👀 What you should see:</strong></p>
<div class="code-block">
<pre><span class="output">github.com
  ✓ Logged in to github.com as SarahAhmed
  ✓ Git operations for github.com configured to use https protocol.</span></pre>
</div>
</div>

<div class="content-block">
<h2>🚀 Step 4 - Start Your Project</h2>
<p>Setup is complete! Now let's get a project folder onto your computer. You must choose **ONLY ONE** of the two paths below:</p>

<div class="callout best">
<div class="callout-title">🛡️ Public vs. Private Repositories</div>
<p>When you create a repository on GitHub, it will ask you to choose a setting:</p>
<ul>
  <li><strong>Public:</strong> Anyone on the internet can see your code and download your project. Great for sharing open-source work!</li>
  <li><strong>Private:</strong> Only you and people you explicitly invite can see or edit it. Best for school projects and private practice.</li>
</ul>
</div>
</div>

<div class="content-block">
<h2>📁 Path A: Create a Brand New Project (git init)</h2>
<p>Choose this path if you are starting a brand new project from a blank folder on your computer. <strong>(Skip Path B if you do this!)</strong></p>

<h3>A-1. Create an Empty Repo on GitHub</h3>
<ol>
  <li>Go to GitHub, log in, and click the green <strong>New</strong> button (or go to github.com/new).</li>
  <li>Name your repository (for example, <code>my-first-project</code>).</li>
  <li><strong>CRITICAL:</strong> Leave "Add a README file", "Add .gitignore", and "Choose a license" unchecked. The repository must be completely blank!</li>
  <li>Click <strong>Create repository</strong>.</li>
</ol>
<img src="assets/git_init.jpeg" alt="GitHub empty repository setup" style="max-width: 100%; border-radius: 8px; margin-top: 10px; margin-bottom: 20px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

<h3>A-2. Create a folder on your computer</h3>
<div class="code-block">
<pre><span class="comment"># Open your terminal and run these commands to create and enter a new folder:</span>
<span class="cmd">$ mkdir my-first-project</span>
<span class="cmd">$ cd my-first-project</span></pre>
</div>

<h3>A-3. Turn it into a Git repository</h3>
<div class="code-block">
<pre><span class="cmd">$ git init</span></pre>
</div>
<p>🎉 Boom! Your normal folder is now a <strong>smart folder</strong>. Git created a hidden folder named <code>.git</code> inside. That's the memory bank where all your project's snapshots will be stored.</p>

<div class="callout story">
<div class="callout-title">💡 Note about the README</div>
<p>Because you chose Path A, your folder is completely empty. You do not have a <code>README.md</code> file yet! We will create one together in the next chapter.</p>
</div>
</div>

<div class="content-block">
<h2>📥 Path B: Clone an Existing Project (git clone)</h2>
<p>Choose this path if the project already exists on GitHub and you want to download a copy to your computer. <strong>(Skip Path A if you do this!)</strong></p>

<h3>B-1. Create a Repo with a README on GitHub</h3>
<ol>
  <li>Go to GitHub and click <strong>New</strong> repository.</li>
  <li>Name it <code>first-clone-demo</code>.</li>
  <li><strong>CRITICAL:</strong> Check the box that says <strong>"Add a README file"</strong>. This makes sure the repository has files in it!</li>
  <li>Click <strong>Create repository</strong>.</li>
</ol>
<img src="assets/git_clone.jpeg" alt="GitHub repository setup with README" style="max-width: 100%; border-radius: 8px; margin-top: 10px; margin-bottom: 20px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

<h3>B-2. Copy the URL</h3>
<ol>
  <li>On your new repository page, click the green <strong>Code</strong> button.</li>
  <li>Make sure the <strong>HTTPS</strong> tab is selected.</li>
  <li>Click the copy button (looks like two overlapping squares) to copy the web address.</li>
</ol>

<h3>B-3. Clone it to your computer</h3>
<div class="code-block">
<pre><span class="comment"># Navigate in your terminal to where you want the folder (like your Desktop)</span>
<span class="cmd">$ cd ~/Desktop</span>
<span class="comment"># Clone it (paste your copied URL)</span>
<span class="cmd">$ git clone &lt;paste-your-link-here&gt;</span></pre>
</div>
<p><strong>👀 What you should see:</strong></p>
<div class="code-block">
<pre><span class="output">Cloning into 'first-clone-demo'...
Receiving objects: 100% (3/3), done.</span></pre>
</div>

<h3>B-4. Go inside the downloaded folder:</h3>
<div class="code-block">
<pre><span class="cmd">$ cd first-clone-demo</span></pre>
</div>
<p>🎉 <strong>Done!</strong> You now have a copy of the project downloaded and ready on your computer.</p>

<div class="callout story">
<div class="callout-title">💡 Note about the README</div>
<p>Since you chose Path B, you will notice that a file named <code>README.md</code> is already inside your folder ready to edit!</p>
</div>

<h3>💡 Bonus: Shallow Clone with --depth 1</h3>
<p>Some projects on GitHub are massive, with thousands of files and years of history. If you just want to run the code and don't care about the history, you can do a **shallow clone**:</p>
<div class="code-block">
<pre><span class="comment"># Download only the latest snapshot (no historical commits)</span>
<span class="cmd">$ git clone --depth 1 https://github.com/innovationhub07/first-clone-demo.git</span></pre>
</div>
<ul>
  <li><strong>Why use it?</strong> It is **much faster** and uses less disk space. Perfect for testing large open-source projects!</li>
  <li><strong>The catch:</strong> You can't browse through older edits. If you need them later, you'll need to run <code>git fetch --unshallow</code>.</li>
</ul>

<div class="callout best">
<div class="callout-title">💡 init vs. clone - When to use which?</div>
<ul>
  <li><strong>git init</strong> (Path A) → You are **starting from zero**. No repository exists anywhere yet.</li>
  <li><strong>git clone</strong> (Path B) → The project **already exists on GitHub**. You're downloading it.</li>
  <li><strong>⭐ Industry Fact:</strong> In professional software teams, developers almost always use <strong>git clone</strong> because they are joining a team that already has a codebase set up!</li>
  <li><strong>Never do both!</strong> If you clone a folder, it is already a Git repository. Do not run <code>git init</code> inside it.</li>
</ul>
</div>

<div class="callout best">
<div class="callout-title">🏁 Chapter 1.2 Checkpoint: Where are we?</div>
<p>You should have exactly **one** project folder on your computer (either the empty one from Path A, or the cloned one from Path B).</p>
<p>Your machine is now set up and connected to GitHub! Let's start saving work. 🚀</p>
</div>
</div>

<div class="content-block">
<h2>🔗 Connecting to GitHub: The "Code" Button & Cloning Options</h2>
<p>When you click the green **Code** button on GitHub, you will see three tabs: **HTTPS**, **SSH**, and **GitHub CLI**. These are three different "languages" your computer can use to talk to GitHub. Here is a simple explanation of each:</p>

<div class="visual-diagram">
<div class="diagram-title">Three Ways to Connect</div>
<div class="git-flow">
<div class="flow-box flow-working">HTTPS<br><small>Password / Security Token</small></div>
<div class="flow-arrow">or</div>
<div class="flow-box flow-staging">SSH<br><small>Digital Key Pair</small></div>
<div class="flow-arrow">or</div>
<div class="flow-box flow-local">GitHub CLI<br><small>Terminal Smart Remote</small></div>
</div>
</div>

<h3>1. HTTPS (The Universal Option)</h3>
<div class="callout story">
<div class="callout-title">🔑 Metaphor</div>
<p>Like logging into a website using a **Username and Password**. It's the standard way we browse the internet.</p>
</div>
<ul>
  <li><strong>How to use it:</strong> Copy the URL starting with <code>https://</code> and run:
    <div class="code-block" style="margin-top: 5px; margin-bottom: 5px;">
    <pre><span class="cmd">$ git clone https://github.com/innovationhub07/first-clone-demo.git</span></pre>
    </div>
  </li>
  <li><strong>Pros:</strong> Easy. Works out of the box on any computer and network.</li>
  <li><strong>Cons:</strong> You might occasionally need to paste your security token when uploading changes.</li>
</ul>

<h3>2. SSH (The "Keycard" Option)</h3>
<div class="callout story">
<div class="callout-title">🔑 Metaphor</div>
<p>Like using a **secure physical keycard** instead of typing a password. You save the key on your computer, tell GitHub about it, and the doors unlock automatically.</p>
</div>
<ul>
  <li><strong>How to use it:</strong> Once configured, copy the link starting with <code>git@</code> and run:
    <div class="code-block" style="margin-top: 5px; margin-bottom: 5px;">
    <pre><span class="cmd">$ git clone git@github.com:innovationhub07/first-clone-demo.git</span></pre>
    </div>
  </li>
  <li><strong>Pros:</strong> No password prompts ever! Super secure and automatic.</li>
  <li><strong>Cons:</strong> Requires a one-time technical setup to generate keys.</li>
</ul>

<h3>3. GitHub CLI (The "Smart Remote" Option)</h3>
<div class="callout story">
<div class="callout-title">🔑 Metaphor</div>
<p>Like using a **voice assistant remote control** (e.g. "Alexa, play music"). You just tell your terminal "clone this repo" and it does it without pasting URLs.</p>
</div>
<ul>
  <li><strong>How to use it:</strong> Install the GitHub CLI tool, sign in once, copy the command under the CLI tab, and run:
    <div class="code-block" style="margin-top: 5px; margin-bottom: 5px;">
    <pre><span class="cmd">$ gh repo clone innovationhub07/first-clone-demo</span></pre>
    </div>
  </li>
  <li><strong>Pros:</strong> Fast and lets you manage issues, pull requests, and settings right from the terminal.</li>
  <li><strong>Cons:</strong> Requires installing a separate tool first.</li>
</ul>

<div class="callout best">
<div class="callout-title">💡 Which one should I use?</div>
<ul>
  <li><strong>Beginners:</strong> Start with **HTTPS**. It is the easiest to understand.</li>
  <li><strong>Daily Users:</strong> Take 5 minutes to set up **SSH**. It saves you from logging in again and again.</li>
  <li><strong>Power Users:</strong> Use **GitHub CLI** to speed up your command line work!</li>
</ul>
</div>

<h3>🔧 Quick SSH Setup (Optional - Try it later!)</h3>
<p>If you want to try the SSH keycard method, here is how you set it up step-by-step:</p>
<div class="code-block">
<pre><span class="comment"># Step 1: Generate a new digital key pair on your computer</span>
<span class="cmd">$ ssh-keygen -t ed25519 -C "your.email@gmail.com"</span>
<span class="comment"># (Press Enter to accept all default settings)</span>

<span class="comment"># Step 2: Open and copy the public key (the "lock")</span>
<span class="cmd">$ cat ~/.ssh/id_ed25519.pub</span>
<span class="comment"># (Copy the text starting with "ssh-ed25519...")</span>

<span class="comment"># Step 3: Register the key in GitHub settings</span>
<span class="comment"># Go to github.com → Settings (profile menu) → SSH and GPG keys → New SSH key → Paste your key</span>

<span class="comment"># Step 4: Test if it works!</span>
<span class="cmd">$ ssh -T git@github.com</span></pre>
</div>
<p><strong>👀 What you should see:</strong></p>
<div class="code-block">
<pre><span class="output">Hi SarahAhmed! You've successfully authenticated, but GitHub does not provide shell access.</span></pre>
</div>
<p>If you see that greeting, you are connected! You can now use SSH links. 🎉</p>
</div>


`;

CHAPTER_CONTENT["1.3"] = `
<div class="content-block">
<h2>📊 Install the VS Code Git Graph Extension</h2>
<p>As your project grows, reading log history in the terminal can get a bit confusing. That's why developers use visual tools! A great one is the <strong>Git Graph</strong> extension in VS Code. You can install it by searching for **"Git Graph"** in the VS Code Extensions panel (Ctrl+Shift+X). Once installed, click the Git Graph icon in your Source Control panel to see a neat visual timeline of your saves.</p>
<p>We recommend installing it now so you can watch your commits grow on a visual map!</p>
</div>

<div class="content-block">
<h2>🎬 Packing the Backpack (Staging & Committing)</h2>

<div class="callout best">
<div class="callout-title">📍 Picking Up Where We Left Off</div>
<p>In Chapter 1.2, you created a new project folder called <code>my-first-project</code> and ran <code>git init</code>. Let's start right there!</p>
<ol>
  <li>Open your terminal and enter your folder: <code>cd my-first-project</code>.</li>
  <li>Create a new file named <code>README.md</code>. (You can do this by typing <code>echo "# My Project" > README.md</code> in terminal, or create it in VS Code).</li>
</ol>
<p>Now you have a new file in your workspace, but Git isn't tracking it yet. Let's learn how to save it step-by-step.</p>
</div>
</div>

<div class="content-block">
<h2>📊 Step 1: git status (Check Your Desk)</h2>
<p>This is the most helpful command in Git. You should run it often. It is like checking your study desk to see which files you've worked on.</p>

<div class="callout story">
<div class="callout-title">🎒 Metaphor: The Study Desk (Working Directory)</div>
<p>Imagine your study desk is your <strong>Working Directory</strong>. When you write code, you spread your papers, drawings, and notebooks all over the desk. It's easy to write and erase here, but nothing is packed away for school yet.</p>
</div>

<p><strong>👉 Run this command inside your <code>my-first-project</code> folder:</strong></p>
<div class="code-block">
<pre><span class="cmd">$ git status</span></pre>
</div>

<p><strong>👀 Here is the exact output you will see:</strong></p>
<div class="code-block">
<pre><span class="output">On branch main
607: 
No commits yet
609: 
Untracked files:
  (use "git add &lt;file&gt;..." to include in what will be committed)
	<span class="t-error">README.md</span>

nothing added to commit but untracked files present (use "git add" to track)</span></pre>
</div>

<p><strong>🔍 What does this mean?</strong></p>
<ul>
  <li><code>On branch main</code>: You are on the main timeline.</li>
  <li><code>No commits yet</code>: You haven't saved any snapshots of this project yet.</li>
  <li><code>Untracked files: README.md</code> (shown in red): Git sees the new file on your desk, but it hasn't been placed in the backpack (Staging Area) yet. Git is currently ignoring it.</li>
</ul>
</div>

<div class="content-block">
<h2>➕ Step 2: git add (Put It in the Backpack)</h2>
<p>To move a file from your desk to the Staging Area, we use the <code>git add</code> command.</p>

<div class="callout story">
<div class="callout-title">🎒 Metaphor: Staging Area (The Backpack)</div>
<p>When you're ready to go to school, you select specific notebooks from your desk and put them in your **Backpack (Staging Area)**. They aren't zipped up yet. You can still add more or take them out, but they are organized and ready to go.</p>
</div>

<p><strong>👉 Run this command to stage your new file:</strong></p>
<div class="code-block">
<pre><span class="cmd">$ git add README.md</span></pre>
</div>

<p>💡 <em>Tip: If you want to pack all changed files on your desk at once, type <code>git add .</code> (or <code>git add -A</code>).</em></p>

<h3>✅ Let's check our status again to see what changed:</h3>
<div class="code-block">
<pre><span class="cmd">$ git status</span></pre>
</div>

<p><strong>👀 Here is the output:</strong></p>
<div class="code-block">
<pre><span class="output">On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached &lt;file&gt;..." to unstage)
	<span class="t-success">new file:   README.md</span></span></pre>
</div>

<p><strong>🔍 What does this mean?</strong><br>
The file name turned green! <code>Changes to be committed</code> means that <code>README.md</code> is now inside the backpack (Staging Area) and is ready to be permanently saved.</p>

<div class="callout story">
<div class="callout-title">🤔 Why do we need two steps? Why not just "Save"?</div>
<p>Because you might be doing three different tasks! You might be editing your code, fixing a typo, and drawing a logo. The staging area lets you choose to pack only the files for the "typo fix" and save them separately, keeping your project history clean and easy to follow.</p>
</div>
</div>

<div class="content-block">
<h2>💾 Step 3: git commit (Zip the Backpack)</h2>
<p>A commit takes everything currently in the Staging Area and permanently stores it as a snapshot in the project's history vault.</p>

<div class="callout story">
<div class="callout-title">🎒 Metaphor: Commit (Zipping the Backpack)</div>
<p>When everything you need is packed, you **zip up the backpack**. It is now locked, saved, and ready to go! Git records this as a permanent point in time, giving you a digital receipt.</p>
</div>

<p><strong>👉 Run this command to save your first snapshot:</strong></p>
<div class="code-block">
<pre><span class="cmd">$ git commit -m "docs: add README.md"</span></pre>
</div>

<p><strong>👀 Here is the output:</strong></p>
<div class="code-block">
<pre><span class="output">[main (root-commit) 8a3f9e2] docs: add README.md
 1 file changed, 1 insertion(+)
 create mode 100644 README.md</span></pre>
</div>

<p><strong>🔍 What does this mean?</strong><br>
Success! Git saved a permanent picture of your project folder. The 7-character code (like <code>8a3f9e2</code>) is your snapshot's unique ID number (its fingerprint).</p>

<h3>✅ Let's check status one more time:</h3>
<div class="code-block">
<pre><span class="cmd">$ git status</span></pre>
</div>
<p><strong>👀 What you will see:</strong></p>
<div class="code-block">
<pre><span class="output">On branch main
nothing to commit, working tree clean</span></pre>
</div>
<p>Your desk is clean, your backpack is zipped, and everything is safely locked in the vault! 🔐</p>
</div>

<div class="content-block">
<h2>📜 Step 4: git log (View Your Saved Snapshots)</h2>
<p>How do we look at our timeline of past saves? We use the <code>git log</code> command.</p>

<p><strong>👉 Run this command:</strong></p>
<div class="code-block">
<pre><span class="cmd">$ git log --oneline</span></pre>
</div>

<p><strong>👀 What you will see:</strong></p>
<div class="code-block">
<pre><span class="output">8a3f9e2 (HEAD -> main) docs: add README.md</span></pre>
</div>
<p>This shows your list of commits. <code>8a3f9e2</code> is the unique ID, <code>(HEAD -> main)</code> indicates that your current timeline is pointing at this commit, and <code>docs: add README.md</code> is the commit message you typed.</p>
</div>

<div class="content-block">
<h2>🔍 Step 5: git diff (Compare Changes)</h2>
<p>Let's see what happens when you modify a file that Git is already tracking.</p>

<p><strong>👉 Open <code>README.md</code> in your editor and add a second line:</strong></p>
<div class="code-block">
<pre><span class="output"># My Project
### My Project Features</span></pre>
</div>
<p>Save the file. Before staging it, let's see what changes we've made compared to our last save.</p>

<p><strong>👉 Run the diff command:</strong></p>
<div class="code-block">
<pre><span class="cmd">$ git diff</span></pre>
</div>

<p><strong>👀 Here is the output:</strong></p>
<div class="code-block">
<pre><span class="output">diff --git a/README.md b/README.md
index a1b2c3d..e4f5g6h 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,2 @@
 # My Project
<span class="t-success">+### My Project Features</span></span></pre>
</div>

<p><strong>🔍 What does this mean?</strong><br>
The line with a green <code>+</code> shows exactly what you added since your last commit. If you deleted anything, it would show up in red with a <code>-</code>.</p>

<p><strong>👉 Now let's stage and commit this update:</strong></p>
<div class="code-block">
<pre><span class="cmd">$ git add README.md</span>
<span class="cmd">$ git commit -m "docs: update project features"</span></pre>
</div>

<p><strong>👉 Check your history graph again:</strong></p>
<div class="code-block">
<pre><span class="cmd">$ git log --oneline</span></pre>
</div>
<p><strong>👀 What you will see now:</strong></p>
<div class="code-block">
<pre><span class="output">9f3e4c1 (HEAD -> main) docs: update project features
8a3f9e2 docs: add README.md</span></pre>
</div>
<p>You now have two saves on your timeline! You can jump back to either of them at any time.</p>

<div class="content-block">
<h2>⏪ How to Roll Back Time</h2>
<p>In your log output, you saw two commits with 7-digit IDs (like <code>8a3f9e2</code>). These are your receipt numbers. You can use them to time-travel!</p>

<div class="callout best">
<div class="callout-title">📍 What is HEAD?</div>
<p>You noticed <code>(HEAD -> main)</code> next to your latest commit. Let's break it down:</p>
<ul>
  <li><strong>HEAD</strong> is Git's **"You Are Here" pointer**. It's like the red pin on Google Maps or a bookmark in a book. It shows which commit your files are currently displaying.</li>
  <li><strong>main</strong> is the name of your default timeline (branch).</li>
  <li><strong>HEAD -> main</strong> means you are currently looking at the latest commit on the <code>main</code> branch.</li>
</ul>
<p>When you roll back, Git simply moves that HEAD pin to an older commit, updating your files to match that past moment.</p>
</div>

<div class="callout story">
<div class="callout-title">🕰️ Option 1: Just Look (Read-Only Time Travel)</div>
<p>If you want to peek at your first commit without changing anything permanently, type:</p>
<div class="code-block">
<pre><span class="comment"># Use the hash from your git log</span>
<span class="cmd">$ git checkout 8a3f9e2</span></pre>
</div>
<p>Your files instantly change to look exactly like they did in your first save. This is a read-only view. To return to the present day, type:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch main</span></pre>
</div>
</div>

<div class="callout story">
<div class="callout-title">⏮️ Option 2: Reset (Undo Progress)</div>
<p>If you want to permanently undo your last commit and go back to the first snapshot, use <code>git reset</code>:</p>
<div class="code-block">
<pre><span class="comment"># Go back to the first commit (keep your file edits on the desk)</span>
<span class="cmd">$ git reset --soft 8a3f9e2</span></pre>
</div>
<ul>
  <li><code>--soft</code>: Moves HEAD back, but keeps your edits safe on your desk (working directory) so you can fix and re-commit them.</li>
  <li><code>--hard</code>: <strong>⚠️ WARNING!</strong> Moves HEAD back and throws away all file changes made after that commit. This cannot be undone!</li>
</ul>
</div>

<div class="callout best">
<div class="callout-title">💡 A Quick Tip</div>
<p>In daily programming, you do not need to run <code>git status</code> after every command! We only do it here so you can visualize how Git shifts files between your desk, backpack, and vault. Normally, you just code, run <code>git add .</code>, and <code>git commit</code>!</p>
</div>
</div>

<div class="content-block">
<h2>💻 Committing from VS Code (The Visual Way)</h2>
<p>Using the terminal is great, but VS Code has a built-in Source Control panel to do this visually!</p>

<h3>How to find it:</h3>
<p>Click the branch icon (forked line symbol) in the left sidebar of VS Code.</p>
<img src="assets/gitbranchsymbol.png" alt="VS Code Source Control icon" style="max-width: 60px; border-radius: 4px; margin-top: 5px; margin-bottom: 15px;">

<h3>Visual steps:</h3>
<ol>
  <li>Edit your files and save.</li>
  <li>Open the Source Control panel.</li>
  <li>Click the **+** button next to the file names to stage them (same as <code>git add</code>).</li>
  <li>Type a description in the message box at the top.</li>
  <li>Click the checkmark **Commit** button.</li>
  <li>Click **Sync Changes** to push them to GitHub.</li>
</ol>
<img src="assets/two_commits.jpeg" alt="VS Code Source Control with commits" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 5px; margin-bottom: 20px;">

<div class="callout story">
<div class="callout-title">💡 Terminal vs. VS Code UI</div>
<p>Both do the exact same thing! The terminal gives you more control and is what professionals use to solve complex issues. The VS Code UI is a great shortcut for quick daily saves. Feel free to use whichever feels easier!</p>
</div>
</div>

<div class="content-block">
<h2>💼 Professional Workflows</h2>
<p>Here are some practices used by software teams around the world:</p>

<h3>1. Writing Clean Commit Messages</h3>
<p>Teams use **Conventional Commits** so history is easy to read. The format is <code>type: description</code>:</p>
<ul>
  <li><code>feat:</code> Adding a new feature (e.g. <code>feat: add login button</code>)</li>
  <li><code>fix:</code> Fixing a bug (e.g. <code>fix: repair calculator addition error</code>)</li>
  <li><code>docs:</code> Documentation changes only (e.g. <code>docs: write readme instructions</code>)</li>
  <li><code>style:</code> Code style/formatting changes (e.g. <code>style: fix spaces and tabs</code>)</li>
</ul>

<h3>2. Staging Parts of a File (git add -p)</h3>
<p>If you edited one file to do two unrelated things (like fixed a math bug AND added a new CSS color), you can run <code>git add -p</code>. Git will show you each change one-by-one and ask: <em>"Do you want to stage this part?"</em> This lets you make two separate, clean commits from one file!</p>

<h3>3. Fixing Your Last Commit (git commit --amend)</h3>
<p>Made a typo in your last commit message or forgot to stage a file? Run: <code>git commit --amend -m "New correct message"</code> to rewrite your last commit instead of making a new, messy save point.</p>
</div>


`;

CHAPTER_CONTENT["1.4"] = `
<div class="content-block">
<h2>🎬 Pushing to GitHub (Backup in the Cloud)</h2>

<div class="callout story">
<div class="callout-title">📖 The 'Save' vs 'Cloud Backup'</div>
<p>So far, your commits are **only on your local computer**. If your laptop gets damaged or lost, your work goes with it! We need to copy your local history timeline up to GitHub. This process is called <strong>Pushing</strong>.</p>
</div>
</div>

<div class="content-block">
<h2>🔀 Path A vs. Path B: What's the Difference?</h2>
<p>Depending on which path you chose in Chapter 1.2, your pushing setup will be slightly different:</p>

<div class="callout best">
<div class="callout-title">🤔 Why are the steps different?</div>
<ul>
<li><strong>Path A (<code>git init</code>)</strong> created a new project locally. Your computer doesn't know where the GitHub repository is yet. You have to introduce them!</li>
<li><strong>Path B (<code>git clone</code>)</strong> downloaded a project from GitHub. Your computer already knows the web address because it downloaded it from there! Git automatically remembers the connection (called a "remote").</li>
</ul>
</div>
<p>Think of it like this: If you **built a phone from scratch** (Path A), you have to manually type in your friend's phone number before you can call them. But if your friend **handed you a pre-configured phone** with their number already saved (Path B), you can just hit the Call button immediately!</p>
</div>

<div class="content-block">
<h2>📁 If You Followed Path A (<code>git init</code>)</h2>
<p>Since your project was created locally, run these **three commands** to link it to GitHub:</p>

<h3>A-1. Name the default timeline</h3>
<div class="code-block">
<pre><span class="cmd">$ git branch -M main</span></pre>
</div>
<p>This renames your active local timeline to <code>main</code>, which matches the standard folder name GitHub expects.</p>

<h3>A-2. Add the GitHub link (The remote)</h3>
<div class="code-block">
<pre><span class="cmd">$ git remote add origin https://github.com/YOUR-USERNAME/my-first-project.git</span></pre>
</div>
<ul>
  <li><code>remote add</code>: Tells Git we are connecting a cloud repository.</li>
  <li><code>origin</code>: This is just a nickname for the long URL, like saving a contact as "Home".</li>
  <li><code>https://...</code>: The web address of your repository on GitHub.</li>
</ul>

<h3>A-3. Push for the first time!</h3>
<div class="code-block">
<pre><span class="cmd">$ git push -u origin main</span></pre>
</div>
<p>This tells Git: <em>"Push my commits to the address nicknamed <strong>origin</strong>, specifically onto the <strong>main</strong> branch."</em></p>
<p><strong>What does <code>-u</code> do?</strong> It sets the "Upstream" link. It establishes a permanent connection between your local <code>main</code> timeline and GitHub's <code>main</code> timeline. From now on, you only have to type: <code>git push</code>!</p>
</div>

<div class="content-block">
<h2>📥 If You Followed Path B (<code>git clone</code>)</h2>
<p>Good news: **all the setup was done automatically when you cloned!** Git already knows the address and has set up the tracking links. You can check the connection by typing:</p>
<div class="code-block">
<pre><span class="cmd">$ git remote -v</span></pre>
</div>
<p><strong>👀 What you will see:</strong></p>
<div class="code-block">
<pre><span class="output">origin  https://github.com/YOUR-USERNAME/first-clone-demo.git (fetch)
origin  https://github.com/YOUR-USERNAME/first-clone-demo.git (push)</span></pre>
</div>

<p>To push your changes, you only need to run this command:</p>
<div class="code-block">
<pre><span class="cmd">$ git push</span></pre>
</div>
<p>Git handles the rest!</p>

<div class="callout best">
<div class="callout-title">⚠️ Do NOT run Path A commands in Path B!</div>
<p>If you clone a repo and try to run <code>git remote add origin ...</code>, Git will give you an error: <code>error: remote origin already exists.</code> That's because the clone already set it up!</p>
</div>
</div>

<div class="content-block">
<h2>📊 Side-by-Side Summary</h2>
<table style="width:100%; border-collapse: collapse; margin: 20px 0;">
<thead>
<tr style="background: rgba(139, 92, 246, 0.15);">
<th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.3);">Step</th>
<th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.3);">Path A (<code>git init</code>)</th>
<th style="padding: 12px; text-align: left; border-bottom: 2px solid rgba(139, 92, 246, 0.3);">Path B (<code>git clone</code>)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Rename branch</td>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><code>git branch -M main</code></td>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">✅ Already done</td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Add remote link</td>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><code>git remote add origin &lt;url&gt;</code></td>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">✅ Already done</td>
</tr>
<tr>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Set Upstream</td>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><code>git push -u origin main</code></td>
<td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">✅ Already done</td>
</tr>
<tr style="background: rgba(139, 92, 246, 0.08);">
<td style="padding: 10px;"><strong>Daily Push</strong></td>
<td style="padding: 10px;"><em>(Done during setup)</em></td>
<td style="padding: 10px;"><code>git push</code></td>
</tr>
</tbody>
</table>
</div>

<div class="content-block">
<div class="callout best">
<div class="callout-title">✅ Check Your Work!</div>
<p>Open your repository on GitHub in your browser and refresh. You should see your <code>README.md</code> file sitting right there in the cloud! Click the clock icon (labeled **commits**) on the right to see the history match your computer's <code>git log</code>.</p>
<img src="assets/commits.jpeg" alt="GitHub commits history view location" style="max-width: 100%; border-radius: 8px; margin-top: 10px; margin-bottom: 20px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
</div>
</div>

<div class="content-block">
<h2>🤔 Why Does Git Keep Save and Push Separate?</h2>
<p>Why can't we just have one "Save to GitHub" button? Because Git is **Distributed**. It was designed so developers could work anywhere, even on an airplane with no Wi-Fi!</p>
<ul>
  <li>If saves went straight to GitHub, you couldn't write code or save history offline.</li>
  <li>You can make 20 small commits over a weekend, structure them cleanly, and then push them all to GitHub in one go when you're finished.</li>
</ul>

<div class="callout story">
<div class="callout-title">💡 The Daily Workflow</div>
<p>Once setup is done, your standard daily loop is just three quick commands:<br>
1. <code>git add .</code> (Pack the backpack)<br>
2. <code>git commit -m "my update"</code> (Zip the backpack)<br>
3. <code>git push</code> (Upload to the cloud)</p>
</div>
</div>


`;

CHAPTER_CONTENT["1.5"] = `
<div class="content-block">
<h2>🎬 Branching: Parallel Universes for Your Code</h2>

<div class="callout story">
<div class="callout-title">🎮 Metaphor: Minecraft Sandbox Creative Mode</div>
<p>Imagine you and your friends are building a massive castle on a Minecraft server. The castle is looking awesome (this is your <strong><code>main</code> branch</strong>).</p>
<p>Now, you want to build a giant lava slide on the castle walls, but you're worried you might burn down the castle if it goes wrong! What do you do?</p>
<p>You make a copy of the castle map and load it onto a separate creative server (this copy is a **Branch**). You can experiment, build, and even explode things on your branch. The main castle is 100% safe! If the lava slide looks bad, you delete the copy. If it looks epic, you merge it back into the main server map for everyone to see (this is a **Merge**).</p>
</div>
</div>

<div class="content-block">
<h2>🐍 Let's Write Some Python Code!</h2>
<p>Instead of just editing text files, let's write a simple Python program. Enter your <code>my-first-project</code> folder in the terminal.</p>

<h3>1. Create a Python file on the main branch</h3>
<p>Create a file named <code>calculator.py</code> and add this line of code:</p>
<div class="code-block">
<pre><code><span style="color: #f8f8f2">print(</span><span style="color: #e6db74">"Welcome to the Calculator!"</span><span style="color: #f8f8f2">)</span></code></pre>
</div>
<p>Now, save it to your local and cloud history:</p>
<div class="code-block">
<pre><span class="cmd">$ git add calculator.py</span>
<span class="cmd">$ git commit -m "feat: add base calculator"</span>
<span class="cmd">$ git push</span></pre>
</div>

<h3>2. Create a new Branch</h3>
<p>We want to add a math function, but we want to do it in a safe sandbox. Let's create a branch named <code>feature/math-functions</code> and hop inside it:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch -c feature/math-functions</span></pre>
</div>
<p><strong>What does <code>-c</code> mean?</strong> It stands for **Create**. The <code>git switch</code> command jumps between existing timelines. The <code>-c</code> flag tells Git to create the branch first, then switch you to it! (You might see <code>git checkout -b branch-name</code> in older guides; it does the exact same thing!).</p>

<div class="callout best">
<div class="callout-title">💼 Professional Rules of Thumb</div>
<p>In the software industry, there is a golden rule: <strong>NEVER WRITE CODE DIRECTLY ON MAIN.</strong> The <code>main</code> branch holds the working version of the app that is live for users.</p>
<ol>
  <li><strong>Branch first:</strong> Always create a branch before you type new code.</li>
  <li><strong>Use naming categories:</strong> Use folders in your branch names to keep things organized:
    <ul>
      <li><code>feature/my-new-code</code> (For adding things)</li>
      <li><code>bugfix/repair-error</code> (For fixing things)</li>
      <li><code>docs/update-readme</code> (For writing text updates)</li>
    </ul>
  </li>
</ol>
</div>

<h3>3. Build the feature</h3>
<p>Open <code>calculator.py</code> in VS Code and update it to look like this:</p>
<div class="code-block">
<pre><code><span style="color: #f8f8f2">print(</span><span style="color: #e6db74">"Welcome to the Calculator!"</span><span style="color: #f8f8f2">)</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">add</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">b</span></code></pre>
</div>
<p>Save your file and commit it on your branch:</p>
<div class="code-block">
<pre><span class="cmd">$ git add calculator.py</span>
<span class="cmd">$ git commit -m "feat: add addition function"</span></pre>
</div>

<h3>4. Push the branch to GitHub</h3>
<p>Since this branch is brand new, it only lives on your computer. We need to introduce it to GitHub:</p>
<div class="code-block">
<pre><span class="cmd">$ git push -u origin feature/math-functions</span></pre>
</div>
<p>Git links the branches. Now, you only need to run <code>git push</code> when working on this branch!</p>

<div class="callout story">
<div class="callout-title">👀 What happens on GitHub?</div>
<ul>
  <li>Your <code>main</code> branch is completely untouched (it only has the basic print statement).</li>
  <li>Your new <code>feature/math-functions</code> branch contains the new addition code.</li>
  <li>GitHub will show a branch dropdown where you can switch views, and a button asking to "Compare & pull request". Ignore it for now! We will look at merging next.</li>
</ul>
<img src="assets/github-branch-switch.jpeg" alt="Switching branches in GitHub UI" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px;">
</div>

<div class="content-block">
<h2>📊 Visualizing Our History (The Commit Graph)</h2>
<p>Think of your history as a tree with branches:</p>
<img src="assets/new_branch.jpeg" alt="Commit Graph with new branch" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px; margin-bottom: 20px;">
<ul>
  <li>The **blue line** is your <code>main</code> branch.</li>
  <li>The **pink line** splits off, showing the new commit made on the <code>feature/math-functions</code> branch.</li>
  <li><strong>HEAD 📍:</strong> Your active position is currently on the feature branch. If you switch back (<code>git switch main</code>), the addition function will temporarily disappear from your editor!</li>
</ul>
</div>
</div>


`;
