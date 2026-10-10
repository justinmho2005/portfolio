import Image from "next/image";

const blocks = [
  ["Instruction flow", "PC Logic feeds Instruction Memory. The Mapper separates instruction fields before they reach the Instruction Decoder."],
  ["Control logic", "The decoder exposes signals including RegWrite, RegDst, ALUSrc1, ALUSrc2, ALUOp, MemWrite, MemToReg, and Regsrc."],
  ["Register file and ALU", "The diagram shows two register read outputs feeding multiplexers before the ALU, plus a write-data path back to the register file."],
  ["Memory and write-back", "The ALU output connects to data memory. A multiplexer selects between the ALU output and DataMemOut on the return path."],
  ["Branch path", "The ALU exposes take_branch and overflow signals. The branch signal feeds the PC logic."],
  ["FPGA observability", "Debounce logic supplies a push-button clock signal, and a VIO block exposes internal signals for observation."]
];

export default function ProcessorStudy() {
  return <div className="processor-study">
    <nav className="study-outline" aria-label="Case study sections">
      <a href="#processor-overview">Overview</a><a href="#processor-architecture">Architecture</a><a href="#processor-implementation">Implementation</a><a href="#processor-testing">Testing</a><a href="#processor-results">Results</a>
    </nav>
    <section id="processor-overview" className="case-study__section">
      <h2>From instructions to hardware</h2>
      <p>This project brings a RISC-V-style single-cycle processor onto a Xilinx Zynq FPGA. Its implementation connects instruction decoding, a register file, an ALU, data memory, and branching through a shared datapath and control logic.</p>
      <div className="content-grid">
        <div className="content-panel"><h3>Platform and tools</h3><p>Xilinx Zynq FPGA · SystemVerilog · Vivado</p></div>
        <div className="content-panel"><h3>Project context</h3><p className="content-placeholder">To add: course or independent-project context, dates, team size, and my responsibilities.</p></div>
      </div>
    </section>
    <section id="processor-architecture" className="case-study__section">
      <h2>Inside the datapath</h2>
      <p>The original project diagram provides a view of the instruction, data, and control connections. The component descriptions below follow the labels visible in that diagram.</p>
      <figure className="case-study__diagram">
        <a href="/riscv-datapath.png" target="_blank" rel="noreferrer" aria-label="Open original processor datapath in a new tab"><Image src="/riscv-datapath.png" alt="Original processor datapath: PC logic, instruction memory, mapper, decoder, register file, ALU, data memory, multiplexers, debounce, and VIO" width={822} height={605} sizes="(max-width: 1200px) 90vw, 1180px" /></a>
        <figcaption><a href="/riscv-datapath.png" target="_blank" rel="noreferrer">Open original datapath at full size ↗</a></figcaption>
      </figure>
      <div className="content-grid">{blocks.map(([title, text]) => <article className="content-panel" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="content-placeholder">To add: supported instruction subset and encoding. The diagram labels include instruction[15:0] and 16-bit data paths; document the custom RISC-V-style format before describing ISA compatibility.</p>
    </section>
    <section id="processor-implementation" className="case-study__section">
      <h2>Implementation walkthrough</h2>
      <p>The system spans datapath construction, control integration, and FPGA implementation. These sections will capture the build process and the decisions behind it.</p>
      <ol className="study-steps">
        <li><h3>Datapath modules</h3><p>The diagram connects the register file, ALU, memory, and selection multiplexers.</p><p className="content-placeholder">To add: module interfaces, design sequence, and individual ownership.</p></li>
        <li><h3>Instruction and control integration</h3><p>The Mapper and Instruction Decoder connect instruction fields to the datapath controls.</p><p className="content-placeholder">To add: instruction examples, control table, and branch behavior.</p></li>
        <li><h3>FPGA integration</h3><p>The project targets a Xilinx Zynq FPGA using Vivado. The diagram includes debounce logic and a VIO block.</p><p className="content-placeholder">To add: exact board, constraints, clocking, synthesis details, and hardware demonstration.</p></li>
      </ol>
    </section>
    <section id="processor-testing" className="case-study__section">
      <h2>Testing and verification</h2>
      <p className="content-placeholder">Verification evidence will be added here. The checklist below describes coverage to document, rather than completed or passing tests.</p>
      <div className="study-table-wrap"><table className="study-table"><caption>Verification evidence to collect</caption><thead><tr><th scope="col">Area</th><th scope="col">Evidence to add</th><th scope="col">Status</th></tr></thead><tbody>
        {[["Register file", "Read/write behavior and register selection"], ["ALU", "Operation selection, outputs, and flags"], ["Memory", "Read/write control and write-back selection"], ["Instruction control", "Instruction fields and expected decoder signals"], ["Branching", "Taken / not-taken behavior and PC updates"], ["FPGA execution", "Hardware observations and VIO captures"]].map(([area, evidence]) => <tr key={area}><th scope="row">{area}</th><td>{evidence}</td><td>To add</td></tr>)}
      </tbody></table></div>
    </section>
    <section id="processor-results" className="case-study__section">
      <h2>Results and lessons</h2>
      <div className="content-grid"><div className="content-panel"><h3>Results</h3><p className="content-placeholder">To add: demonstrated instructions, verification outcomes, resource utilization, and timing results.</p></div><div className="content-panel"><h3>Challenges and tradeoffs</h3><p className="content-placeholder">To add: debugging examples, design compromises, and how issues were resolved.</p></div><div className="content-panel"><h3>What I learned</h3><p className="content-placeholder">To add: personal lessons and improvements I would make next.</p></div><div className="content-panel"><h3>Resources</h3><p><a className="text-link text-link--light" href="/riscv-datapath.png" target="_blank" rel="noreferrer">Original datapath ↗</a></p><p className="content-placeholder">To add: source repository, report, simulation captures, and demo.</p></div></div>
    </section>
  </div>;
}

