# Mini-Lecture Series: Detailed Outline
## WRIT 20833 - Writing, Computational Culture, and AI

---

## Overview

This four-part mini-lecture series connects humanities concepts (particularly anthropological notions of taboo, sacred boundaries, and collective memory) to modern computational thinking and digital privacy issues. Each lecture builds conceptually from individual boundaries to systemic classification to AI agency to collective digital memory, providing students with a framework for understanding how coding choices embed social and political values.

**Total Duration:** 4 lectures × 10-12 minutes each (40-48 minutes total)  
**Target Audience:** Week 3 students with basic Python knowledge (Variables, Data Types, String Methods, basic Conditionals)  
**Pedagogical Framework:** Based on Melanie Walsh's "Introduction to Cultural Analytics" progression  

---

## Mini-Lecture 1: Sacred Boundaries
### *From Ancient Taboos to Digital Privacy*

**Duration:** 8 slides, 10-12 minutes  
**Learning Objective:** Map traditional taboo boundaries to modern digital privacy concepts  
**Python Concepts Introduced:** Basic boolean logic, conceptual foundation for if/else statements

### Slide Structure:

1. **Title/Hook (Slide 1)**
   - **Opening Question:** "What do ancient Polynesian chiefs and your smartphone have in common?"
   - **Visual:** Sacred boundaries visualization (chief + taboo + privacy image)
   - **Purpose:** Immediate engagement with unexpected parallel

2. **Defining Taboo (Slide 2)**
   - **Etymology:** Polynesian *tapu/kapu* = sacred/forbidden
   - **Core Concept:** Cultural/religious boundaries around the sacred and dangerous
   - **Consequences:** Violations bring sanctions (supernatural punishment, social ostracism)
   - **Traditional Example:** Polynesian chief's shadow as untouchable sacred space

3. **Boundary Protection (Slide 3)**
   - **Then:** Taboo protected sacred knowledge, family secrets, social order
   - **Now:** Privacy protects personal information and digital identity
   - **Key Insight:** Both create "untouchable" zones around what society values
   - **Visual Contrast:** Chief's shadow ↔ biometric data (both untouchable)

4. **Modern Privacy Parallels (Slide 4)**
   - **Digital Sacred Spaces:** Bank passwords, health records, browsing history, location data
   - **Violation Consequences:** Identity theft, social shame, loss of trust, legal penalties
   - **Shared Anxiety:** "Contamination" that can't be undone once boundaries are crossed

5. **Evolution & Continuity (Slide 5)**
   - **Historical Shift:** Collective religious/cultural values → individual rights/autonomy
   - **Conceptual Continuity:** Need for protective boundaries around what we deem precious
   - **Modern "Pollution":** Unauthorized data access, opaque algorithmic manipulation

6. **Privacy as Sacred (Slide 6)**
   - **Modern Taboos:** What data feels "sacred" vs. merely "sensitive"
   - **Student Reflection:** Personal data hierarchy (public/private/sacred)
   - **Cultural Variation:** Different privacy expectations across communities

7. **Enforcement Systems (Slide 7)**
   - **Traditional:** Community memory, gossip, supernatural sanctions
   - **Modern:** Privacy laws, encryption, access controls, legal penalties
   - **Transition Setup:** How do we automate boundary enforcement?

8. **Conclusion & Transition (Slide 8)**
   - **Key Takeaway:** Privacy laws as modern taboo enforcement tools
   - **Why Breaches Feel Violating:** Boundary-crossing of what we treat as sacred
   - **Bridge to Next Lecture:** How does code automate these boundary decisions?

**Exit Prompt:** "Name one piece of data you treat as 'sacred' and why."

**Suggested Readings:** 
- Wikipedia: "Taboo" (etymology section)
- danah boyd: "Privacy and Publicity in the Context of Big Data" (2010)

---

## Mini-Lecture 2: Coding Taboo Logic
### *From Sacred Categories to Digital Classification*

**Duration:** 8 slides, 10-12 minutes  
**Learning Objective:** Understand how coding choices classify people and embed social values  
**Python Concepts Reinforced:** Boolean variables, if/else logic, comparison operators

### Slide Structure:

1. **Title/Hook (Slide 1)**
   - **Opening Code Example:**
     ```python
     if ritually_pure == True:
         allow_temple_entry()
     else:
         deny_access()
     ```
   - **Hook Question:** "Sound familiar? This is how code thinks about people."
   - **Purpose:** Direct connection between traditional taboo logic and modern code

2. **Code Decides (Slide 2)**
   - **Algorithmic Decisions:** Social media feeds, dating matches, loan approvals, course placement, aid eligibility, legal risk assessment
   - **Myth of Neutral Code:** Every classification system encodes values about what matters, what counts, who belongs where
   - **Visual:** Decision grid showing various algorithmic determinations

3. **Status as Data (Slide 3)**
   - **Traditional Status Variables:** virgin/impure, initiated/uninitiated, sacred/profane, noble/commoner, blessed/cursed
   - **Modern Status Variables:** relationship_status, credit_score, criminal_background, education_level, employment_status
   - **Key Insight:** Boolean-like variables controlling access, then and now

4. **Modern Examples (Slide 4)**
   - **Credit Scoring:**
     ```python
     if credit_score > 650 and income > 50000:
         approve_loan()
     else:
         deny_loan()
     ```
   - **Dating Apps:** Compatibility algorithms determining who you see/meet
   - **Course Registration:** GPA thresholds, prerequisite requirements
   - **Discussion Point:** What assumptions are embedded in these thresholds?

5. **From Gossip to Algorithms (Slide 5)**
   - **Traditional:** Community memory enforced boundaries through social pressure
   - **Modern:** Code automates boundary enforcement at scale
   - **Efficiency vs. Nuance:** Algorithmic speed vs. human context and flexibility
   - **Power Shift:** From community consensus to programmer decisions

6. **Power to Classify (Slide 6)**
   - **Without Literacy:** You are classified BY systems (passive subject)
   - **With Literacy:** You help BUILD classification logic (active participant)
   - **Critical Distinction:** Not every line is political, but design choices about people encode values
   - **Social Consequences:** Classification systems have real impacts on life opportunities

7. **Systems in Action (Slide 7)**
   - **Activity:** Analyze pseudocode snippets for embedded assumptions
   - **Examples:** Housing assignment algorithms, scholarship distribution, content moderation
   - **Student Discussion:** What alternative classification approaches might be fairer?

8. **Your Political Choice (Slide 8)**
   - **Core Question:** "Do you want others making these choices, or to participate in making them?"
   - **Coding as Civic Participation:** Understanding the language of power in digital society
   - **Bridge to Next Lecture:** What happens when AI helps us code these systems?

**Activity:** Analyze 2-3 pseudocode snippets; identify assumptions and potential biases

**Suggested Readings:**
- Safiya Noble: "Algorithms of Oppression" (intro excerpt)
- Ruha Benjamin: "Race After Technology" ("Default Discrimination" chapter)
- Matthew Kirschenbaum: "Hello Worlds" (Chronicle, 2009)

---

## Mini-Lecture 3: Agentic Coding
### *Power or Pseudo-Agency?*

**Duration:** 10 slides, 10-12 minutes  
**Learning Objective:** Critically examine AI-assisted coding's promises and risks  
**Python Concepts Explored:** AI-generated code analysis, understanding vs. implementation

### Slide Structure:

1. **Title/Hook with Live Demo (Slide 1)**
   - **Demo Scenario:** "Hey AI, write me 10 lines of Python to analyze text sentiment"
   - **AI Output Example:**
     ```python
     import nltk
     from textblob import TextBlob
     
     def analyze_sentiment(text):
         blob = TextBlob(text)
         polarity = blob.sentiment.polarity
         if polarity > 0:
             return "Positive"
         elif polarity < 0:
             return "Negative"
         else:
             return "Neutral"
     ```
   - **Critical Question:** "Do you understand each line?"

2. **The Promise (Slide 2)**
   - **Lower Barriers:** No need for years of training to build something functional
   - **Enable Action:** Get working code without mastering every syntax detail
   - **Focus on Problems:** Spend time on logic and goals, not memorizing APIs
   - **Democratize Creation:** More people can participate in digital tool-making
   - **Vision Statement:** "AI assistance could democratize coding power"

3. **The Risks (Slide 3)**
   - **Black Box Problem:** Code that works but you don't understand how/why
   - **Dependency Creation:** Reliance on platforms for basic functionality
   - **Platform Power:** Concentration of coding capability in few tech companies
   - **Loss of Craft:** Potential erosion of deep programming understanding
   - **Quality Questions:** "Will it work on real data with edge cases?"

4. **The Nuanced Reality (Slide 4)**
   - **AI as Scaffold, Not Substitute:** With right pedagogy, AI can support learning
   - **Understanding vs. Implementation:** Knowing what code does vs. writing from scratch
   - **Context Matters:** AI assistance different for experts vs. beginners
   - **Tool Selection:** Choosing when to use AI vs. learning fundamentals

5. **Critical Questions for Users (Slide 5)**
   - **Learning vs. Doing:** "Is this learning a language, or letting someone speak for you?"
   - **Understanding Thresholds:** What level of comprehension is necessary?
   - **Long-term Effects:** How does AI assistance affect skill development?
   - **Ethical Implications:** Who benefits from AI-assisted coding proliferation?

6. **Student Agency Spectrum (Slide 6)**
   - **Full Dependency:** Copy-paste without understanding
   - **Informed Use:** Understand purpose, modify as needed
   - **Collaborative Creation:** AI suggests, human evaluates and refines
   - **Critical Evaluation:** Assess AI output for bias, efficiency, appropriateness
   - **Student Goal:** Move toward informed, critical use

7. **Classroom Applications (Slide 7)**
   - **Appropriate Use Cases:** Syntax help, debugging assistance, brainstorming approaches
   - **Learning Boundaries:** When to struggle with concepts vs. accept AI help
   - **Scaffolding Strategy:** AI assists with implementation while human focuses on logic
   - **Assessment Considerations:** How to evaluate learning vs. AI output

8. **Power Dynamics (Slide 8)**
   - **Who Controls AI Tools:** Platform ownership and bias implications
   - **Access Inequalities:** Not everyone has equal access to AI assistance
   - **Skill Stratification:** AI might increase gap between basic users and experts
   - **Economic Implications:** How AI coding affects job markets and education

9. **Pedagogy and Practice (Slide 9)**
   - **Balanced Approach:** Fundamental understanding + tool literacy
   - **Metacognitive Skills:** Knowing when and how to use AI assistance
   - **Critical Thinking:** Evaluating AI output for accuracy and appropriateness
   - **Ethical Use:** Understanding implications of AI-assisted code

10. **Your Choice Moving Forward (Slide 10)**
    - **Agency Spectrum:** From passive consumer to active creator
    - **Informed Decision:** Understanding trade-offs in AI assistance
    - **Bridge to Next Lecture:** How do AI systems create collective digital memory?
    - **Reflection Prompt:** "How do you want to engage with AI coding tools?"

**Discussion Prompt:** "Where do you see yourself on the agency spectrum? What level of AI assistance feels appropriate for your learning goals?"

**Suggested Readings:**
- Ted Chiang: "Will A.I. Become the New McKinsey?" (New Yorker, 2023)
- Nick Seaver: "Computing Taste" (2017)
- Shoshana Zuboff: "The Age of Surveillance Capitalism" (excerpt)

---

## Mini-Lecture 4: Collective Digital Memory
### *How Code Remembers What Communities Used to Forget*

**Duration:** 9 slides, 10-12 minutes  
**Learning Objective:** Understand how lists, loops, and data structures create systematic memory and control  
**Python Concepts Explored:** Lists as populations, loops as systematic processing, collective data implications

### Slide Structure:

1. **Title/Hook (Slide 1)**
   - **Opening Question:** "What happens when nothing is forgotten and everything is counted?"
   - **Code Preview:**
     ```python
     violations = []
     for person in community:
         if person.broke_taboo:
             violations.append(person.name)
     
     # The code remembers forever
     ```
   - **Setup:** Transition from individual boundaries to collective memory systems

2. **Memory Systems Comparison (Slide 2)**
   - **Traditional Community Memory:**
     - Selective: Some things forgotten over time
     - Contextual: Stories change with perspective and time
     - Forgiving: Time heals social wounds, redemption possible
     - Human: Gossip, oral tradition, flexible interpretation
   - **Digital Collective Memory:**
     - Total: Everything recorded and stored
     - Fixed: Data points don't change context
     - Unforgiving: Permanent digital record
     - Automated: Algorithms, databases, rigid processing

3. **Lists = Populations (Slide 3)**
   - **Individual Processing:**
     ```python
     person_age = 25
     if person_age >= 18:
         print("Can vote")
     ```
   - **Population Processing:**
     ```python
     eligible_voters = []
     for person in population:
         if person.age >= 18:
             eligible_voters.append(person)
     ```
   - **Scale Shift:** From individual cases to systematic population management

4. **Loops = Systematic Control (Slide 4)**
   - **Manual vs. Automated Processing:**
     ```python
     # Before: Individual decisions
     check_person_eligibility(john)
     check_person_eligibility(mary)
     
     # After: Systematic processing
     for person in entire_population:
         check_person_eligibility(person)
     ```
   - **Efficiency and Inflexibility:** Speed vs. human judgment

5. **Counting = Surveillance (Slide 5)**
   - **What Gets Counted:** Clicks, views, locations, purchases, interactions, violations
   - **Code Example:**
     ```python
     user_score = 0
     for action in user_actions:
         if action.type == "suspicious":
             user_score += 1
     
     if user_score > threshold:
         flag_for_review(user)
     ```
   - **Quantification Effects:** Behavior modification through measurement

6. **Historical Echoes (Slide 6)**
   - **Census and Control:** Historical uses of population data for governance
   - **Modern Parallels:** Social credit scores, algorithmic risk assessment
   - **Continuity:** State interest in knowing and categorizing populations
   - **Scale Difference:** Manual records vs. automated real-time tracking

7. **The Scale Problem (Slide 7)**
   - **Individual Agency vs. Collective Processing:**
     - Personal story gets lost in aggregate data
     - Context and nuance disappear in systematic processing
     - Human judgment replaced by algorithmic rules
   - **Benefits and Costs:** Efficiency vs. personal recognition
   - **Democratic Implications:** Individual voice in collective decisions

8. **Your Agency in Collective Systems (Slide 8)**
   - **Understanding the System:** How your data becomes part of collective memory
   - **Participation Choices:** What data to share, how to engage with systems
   - **Resistance Strategies:** Opt-outs, privacy tools, alternative platforms
   - **Civic Engagement:** Advocating for algorithmic transparency and fairness

9. **Your Digital Memory Legacy (Slide 9)**
   - **Personal Reflection:** What digital traces are you leaving?
   - **Collective Impact:** How does your data contribute to system knowledge?
   - **Future Implications:** Long-term consequences of digital memory permanence
   - **Ethical Choices:** Responsible participation in digital collective memory
   - **Final Challenge:** How can we build systems that remember wisely?

**Exit Prompt:** "What aspects of your life do you want remembered forever, and what should be allowed to be forgotten?"

**Activity Suggestion:** Students identify one digital system they participate in and trace how their individual data becomes collective knowledge.

---

## Teaching Strategy & Implementation Notes

### Week-by-Week Scaffold (3-4 weeks):
- **Week 1:** Mini-Lecture 1 + reflection activity mapping taboo vs. privacy in students' lives
- **Week 2:** Mini-Lecture 2 + pseudocode analysis (with Noble/Benjamin reading)
- **Week 3:** Mini-Lecture 3 + live AI demo and tool evaluation
- **Week 4:** Mini-Lecture 4 + digital system analysis activity

### Assessment Ideas:
- **Exit Tickets:** One-sentence responses to key questions from each lecture
- **Reflection Papers:** 200-word responses connecting concepts to personal experience
- **Code Analysis:** Revise pseudocode examples to reduce bias, explain changes
- **Digital Audit:** Map personal data in one system (social media, shopping, etc.)

### Technical Prerequisites:
- Students should understand: Variables, Data Types, String Methods, basic Conditionals
- **Note:** Mini-Lecture 4 introduces lists and loops conceptually but doesn't require implementation

### Pedagogical Approach:
- **Conceptual Before Technical:** Understand why before how
- **Cultural Context:** Connect computational concepts to humanities frameworks
- **Critical Thinking:** Question assumptions embedded in systems
- **Agency Building:** Move from passive users to informed participants

### Visual and Interactive Elements:
- **Code Examples:** Simple, relevant to student experience
- **Visual Metaphors:** Chief's shadow/biometric data, gossip networks/social media
- **Discussion Prompts:** Personal reflection connecting to broader themes
- **Activity Integration:** Hands-on analysis of systems students already use

---

## Connection to Course Tutorials

Each mini-lecture pairs with hands-on Python tutorials that have been simplified for Week 3 appropriateness:

- **Tutorial 1 (Digital Boundaries):** Explores privacy concepts through basic string manipulation and conditionals
- **Tutorial 2 (Classification Logic):** Demonstrates value-embedded classification using individual variables and simple logic
- **Tutorial 3 (AI Agency):** [Coming] Experiments with AI-assisted coding while building critical evaluation skills

The tutorials reinforce lecture concepts through practical coding while maintaining appropriate technical scope for beginning students.

---

*This outline represents the implemented lecture series structure as of the current curriculum review and optimization process for WRIT 20833.*
