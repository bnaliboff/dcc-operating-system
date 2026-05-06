export type Value = {
  slug: string;
  name: string;
  tagline: string;
  oneLineBehavior: string;
  openingPassage: string;
  dailyPractice: { name: string; description: string; example: string };
  definingMoment: { name: string; description: string; example: string };
  inTheField: string;
  inTheOffice: string;
  crossLinks: { toSlug: string; bridge: string }[];
};

export const values: Value[] = [
  {
    slug: 'leadership',
    name: 'Leadership',
    tagline: 'Shape brilliance while creating alignment.',
    oneLineBehavior: 'Teach weekly. Step into ambiguity before being asked.',
    openingPassage:
      'Our root network conducts through teachers. The superintendent who pauses to explain the why behind a method, the PM who shares difficult client feedback openly — these are not soft acts. They are the mechanism by which a manager in Honolulu and a project manager in Manhattan make the same quality decision, independently, under pressure, without a phone call. Leadership at DCC is a transfer, not a title.',
    dailyPractice: {
      name: 'Teach someone something every week.',
      description:
        'Not a formal training. A five-minute walkthrough of why a detail matters, how schedule logic works, what a client actually cares about. The super who shows the associate the difference between cove details. The PM who walks a PC through change order reasoning.',
      example:
        'The PM who walks a PC through the reasoning behind a change order — not just the number, but why the scope shifted and what it signals about how the project is running.',
    },
    definingMoment: {
      name: 'Step into ambiguity before being asked.',
      description:
        'When a scope gap surfaces at 4 PM Friday and nobody owns it, the DCC leader frames the problem, proposes a path, and communicates. The opposite of reactive. The behavior every employee identified in their reviews as the growth edge.',
      example:
        'A submittal gap surfaces Friday afternoon. No clear owner, no process in place. The DCC leader maps the problem, proposes a coverage decision, and has it in the superintendent\'s inbox before Monday morning.',
    },
    inTheField:
      'The superintendent who pauses work to explain the "why" behind a method to the crew — not just the "what."',
    inTheOffice:
      'The PM who shares a client\'s feedback openly with the team, even when it stings, and turns it into a learning moment.',
    crossLinks: [
      { toSlug: 'integrity', bridge: 'Leadership without kept promises is performance.' },
      { toSlug: 'innovation', bridge: 'Teaching weekly is the channel through which new ideas reach the field.' },
    ],
  },
  {
    slug: 'partnership',
    name: 'Partnership',
    tagline: 'Champion for our clients to achieve extraordinary things.',
    oneLineBehavior: 'Anticipate, don’t react. Protect the relationship even when it costs you the argument.',
    openingPassage:
      'Thirty-three years. Eighty-five percent repeat clients. That number is the measurable output of a specific behavior practiced at the project level, one call at a time. DCC partners do not wait for the relationship to prove itself. They protect it before there is ever a reason to defend it — anticipating what the client needs before the client knows to ask.',
    dailyPractice: {
      name: 'Anticipate, don’t react.',
      description:
        'Call the client before they call you. Update the architect before the RFI is late. Flag the variance before the monthly report. Luxury brands expect the same standard from DCC that they deliver to their own customers: you should know what I need before I ask.',
      example:
        'The PM who flags a potential schedule impact to the brand team two weeks before the affected milestone — not in the OAC where it becomes a surprise.',
    },
    definingMoment: {
      name: 'Protect the relationship, even when it costs you the argument.',
      description:
        'There are moments where DCC is technically right — the spec was unclear, the material arrived damaged, the design changed after buyout. The DCC partner picks the long game. This is what produces 85% repeat business over thirty years.',
      example:
        'DCC absorbs a coordination error that is arguably the architect\'s responsibility. The PM makes the client whole, documents the facts cleanly, and addresses the root cause in the next design meeting — not in the moment.',
    },
    inTheField:
      'The super who walks the site with the owner rep unprompted, pointing out progress and upcoming milestones — not waiting for the OAC.',
    inTheOffice:
      'The PM who remembers a client’s design preferences across three projects and references them before the brand team even has to mention it.',
    crossLinks: [
      { toSlug: 'integrity', bridge: 'Clients can absorb bad news; they cannot absorb surprise.' },
      { toSlug: 'persistence', bridge: 'Anticipation is persistence applied before the problem arrives.' },
    ],
  },
  {
    slug: 'persistence',
    name: 'Persistence',
    tagline: 'Pursue perfection.',
    oneLineBehavior: 'Check it one more time. Stay in the fight when the project turns ugly.',
    openingPassage:
      'In luxury retail construction, close enough does not exist. The level check that catches a 1⁄16″ deviation before the millwork arrives, the estimate review that catches a missed escalation clause — these acts are invisible to the client and essential to the brand. Persistence is not temperament. It is the disciplined refusal to lower the standard when lowering would be easier.',
    dailyPractice: {
      name: 'Check it one more time.',
      description:
        'The level check that catches a 1⁄16″ deviation before the millwork arrives. The estimate review that catches a missed escalation clause. The submittal re-read before it goes to the architect. In luxury retail, “close enough” doesn’t exist.',
      example:
        'The submittal goes back for one more read before it leaves the office. The inconsistency in the finish spec — the kind that would have cost two weeks at punch list — is caught at the desk.',
    },
    definingMoment: {
      name: 'Stay in the fight when the project turns ugly.',
      description:
        'Every luxury build has a phase where the timeline compresses, changes cascade, vendors are late, and the walkthrough is Tuesday. Persistence means you don’t lower the standard — you raise the effort. You run toward the problem.',
      example:
        'Three weeks from opening. Changes cascading. The super is on-site at 6 AM every day, running toward the problem rather than managing expectations downward.',
    },
    inTheField:
      'The crew that does a complete dry lay of the employee restroom to ensure the joints line up without a cut — without being asked by the PM.',
    inTheOffice:
      'The estimator who flags a pricing risk that would make the bid less competitive, because protecting the margin matters more than winning the job.',
    crossLinks: [
      { toSlug: 'partnership', bridge: 'Checking it one more time is what the client never sees, and always feels.' },
      { toSlug: 'innovation', bridge: 'The second look is where new methods present themselves.' },
    ],
  },
  {
    slug: 'integrity',
    name: 'Integrity',
    tagline: 'Say it. Do it.',
    oneLineBehavior: 'Make promises small enough to keep. Surface bad news early and in person.',
    openingPassage:
      'A superintendent in Honolulu and a project manager in Manhattan must make the same quality decision, independently, under pressure, without a phone call. That alignment is only possible if both can be trusted to surface bad news early, make promises small enough to keep, and follow through every time. Integrity is the connective tissue of the matrix.',
    dailyPractice: {
      name: 'Make promises small enough to keep — then keep every one.',
      description:
        'Don’t say “I’ll get back to you.” Say “I’ll have the answer by 3 PM Thursday” — then deliver at 2:45. The single most observable integrity behavior in construction. Promise-keeping is the named standard.',
      example:
        'The PC commits to a specific time for the RFI response rather than “end of week.” The answer arrives at 2:45 on the day named. The architect stops following up.',
    },
    definingMoment: {
      name: 'Surface bad news early and in person.',
      description:
        'The budget is over. The schedule slipped. The sub defaulted. DCC integrity means the PM picks up the phone, explains the situation, and brings a proposed solution in the same breath. Luxury clients can absorb bad news; they cannot absorb surprise.',
      example:
        'The WIP report shows a variance. The PM calls the owner before the monthly report goes out — with the number, the cause, and a recovery path. The client hears it first from DCC, not from the report.',
    },
    inTheField:
      'When the subcontractor falls short of a commitment, you figure out a way to get them to work a double or add manpower, so it doesn’t affect next week’s work.',
    inTheOffice:
      'When the WIP report has a variance, you surface it in the monthly review — you don’t bury it and hope it corrects next period.',
    crossLinks: [
      { toSlug: 'leadership', bridge: 'A leader’s standard is the smallest promise they keep.' },
      { toSlug: 'partnership', bridge: 'Surfacing bad news early is how a thirty-year relationship is protected at hour eleven.' },
    ],
  },
  {
    slug: 'innovation',
    name: 'Innovation',
    tagline: 'Rethink all ideas courageously.',
    oneLineBehavior: 'Ask what we learned after every phase. Challenge the way it’s always been done — including your own way.',
    openingPassage:
      'DCC has spent thirty-three years building for brands that do not tolerate stagnation. The expectation is that the hundredth project carries more knowledge than the first. Innovation here is not technology for its own sake — it is the institutionalized practice of asking what we learned, at the phase level, before the team scatters and the lesson dissolves.',
    dailyPractice: {
      name: 'Ask “what did we learn?” after every project phase.',
      description:
        'Not at project end when everyone has scattered — at rough-in completion, at MEP trim out, at punch list. Pre-Con already models this. The practice must cascade to every pod and every build.',
      example:
        'The pod holds a 30-minute phase review at rough-in close. One action item surfaces. It is logged, assigned, and reviewed at the next phase close — not forgotten when the next project starts.',
    },
    definingMoment: {
      name: 'Challenge the way we’ve always done it — including your own way.',
      description:
        'Innovation at DCC isn’t technology for technology’s sake. It’s intellectual honesty — the willingness to say, “my approach didn’t work, here’s what I’d do differently.” Innovation requires ego subordination.',
      example:
        'The PM who ran a project sequence a particular way for seven years proposes a different approach on the next build — because the phase review revealed a better one.',
    },
    inTheField:
      'The superintendent who proposes an alternative install sequence that saves two weeks — even though it contradicts the original plan they created.',
    inTheOffice:
      'The PM who adopts a new Procore workflow because it’s better, not because they were told to — and then teaches it to the rest of the pod.',
    crossLinks: [
      { toSlug: 'leadership', bridge: 'Asking “what did we learn?” is leadership in retrospective form.' },
      { toSlug: 'persistence', bridge: 'The willingness to redo the work is what separates innovation from improvisation.' },
    ],
  },
];

export function getValue(slug: string): Value | undefined {
  return values.find((v) => v.slug === slug);
}
