import Image from "next/image";

const blocks = [
  ["Instruction flow", "PC Logic feeds Instruction Memory. The Mapper separates instruction fields before they reach the Instruction Decoder."],
  ["Control logic", "The decoder exposes RegWrite, RegDst, ALUSrc1, ALUSrc2, ALUOp, MemWrite, MemToReg, and Regsrc to coordinate the datapath."],
  ["Register file and ALU", "Two register read outputs feed operand-selection multiplexers before the ALU. A write-data path returns results to the register file."],
  ["Memory and write-back", "The ALU supplies the data-memory address. A multiplexer selects the ALU result or memory output for register write-back."],
  ["Branch path", "The ALU exposes take_branch and overflow signals. The branch signal feeds the PC logic."],
  ["FPGA observability", "Debounce logic supplies a push-button clock signal, while Virtual I/O exposes internal signals for control and observation."]
];

const evidence = [
  ["16-bit adder · Lab 1", "Expected sums and signed-overflow flags compared with Vivado simulation and PYNQ hardware outputs.", "Reported matching results"],
  ["ALU · Lab 2", "Testbench vectors cover operation selection, shifts, overflow, branch conditions, and unassigned select codes; hardware checks use VIO.", "Reported matching results"],
  ["Register file + ALU · Lab 3", "Write 12 and 17 to registers 2 and 3, then read both operands and add them.", "Reported simulation result: 29"],
  ["Data memory · Lab 4", "Hardware sequences write values to registers, store them in memory, load them back, and add the retrieved operands.", "Reported correct hardware outputs"],
  ["Complete processor", "The original diagram documents instruction decoding and PC/branch connections.", "Full-program execution evidence to add"]
];

export default function ProcessorStudy() {
  return <div className="processor-study">
    <nav className="study-outline" aria-label="Case study sections">
      <a href="#processor-overview">Overview</a><a href="#processor-architecture">Architecture</a><a href="#processor-implementation">Implementation</a><a href="#processor-testing">Testing</a><a href="#processor-results">Results</a>
    </nav>
    <section id="processor-overview" className="case-study__section">
      <h2>From instructions to hardware</h2>
      <p>This individual project connects instruction decoding, register access, arithmetic, memory, and branching in a RISC-V-style single-cycle processor. The build progressed through a series of SystemVerilog labs, turning separately tested components into a connected datapath.</p>
      <div className="content-grid">
        <div className="content-panel"><h3>Platform and tools</h3><p>Xilinx Zynq FPGA · SystemVerilog · Vivado · Virtual I/O</p><p>The Lab 1 hardware photograph identifies the board as a TUL PYNQ-Z2 with a Zynq-7020.</p></div>
        <div className="content-panel"><h3>Project context</h3><p>Summer 2025 · EECE 2322: Fundamentals of Digital Design and Computer Organization · EECE 2323: Lab for EECE 2322 · Professor Julius Marpaung.</p><p>I completed all implementation and report work, including the earlier lab exercises that built toward the processor.</p></div>
      </div>
    </section>
    <section className="case-study__section"><h2>Connecting digital logic to a processor</h2><p>EECE 2322 connects number systems, combinational and sequential logic, instruction-set architecture, and processor construction. EECE 2323 applies those ideas through FPGA implementation, simulation, and hardware testing.</p><p>The reports document the progression from a 16-bit adder to an ALU, register-file integration, and data memory. The final datapath diagram adds instruction flow and control. This is a custom educational RISC-V-style design; standard RISC-V ISA compatibility is not established by the supplied material.</p></section>
    <section id="processor-architecture" className="case-study__section">
      <h2>Inside the datapath</h2>
      <p>The original diagram shows the instruction, data, and control connections, including 16-bit instruction and data labels.</p>
      <figure className="case-study__diagram">
        <a href="/riscv-datapath.png" target="_blank" rel="noreferrer" aria-label="Open original processor datapath in a new tab"><Image src="/riscv-datapath.png" alt="Original processor datapath with PC logic, instruction memory, mapper, decoder, register file, ALU, data memory, multiplexers, debounce, and VIO" width={822} height={605} sizes="(max-width: 1200px) 90vw, 1180px" /></a>
        <figcaption><a href="/riscv-datapath.png" target="_blank" rel="noreferrer">Open original datapath at full size ↗</a></figcaption>
      </figure>
      <div className="content-grid">{blocks.map(([title, text]) => <article className="content-panel" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section id="processor-implementation" className="case-study__section">
      <h2>Building the datapath in stages</h2>
      <ol className="study-steps">
        <li><h3>16-bit addition and overflow</h3><p>Lab 1 implemented a two-input, 16-bit adder in SystemVerilog. The sum is limited to 16 bits, while a separate overflow flag detects when same-sign operands produce a result with the opposite sign. A testbench exercised supplied vectors and additional all-zero/all-one patterns before hardware testing.</p></li>
        <li><h3>A selectable arithmetic and logic unit</h3><p>Lab 2 expanded the arithmetic block into an ALU with two signed 16-bit operands and a 4-bit operation selector. The source code implements addition, bitwise inversion, AND, OR, arithmetic right shift, left shift, zero/nonzero branch conditions, and XOR. A default case sets the result and flags to zero for unassigned select codes.</p><p>Overflow is calculated for addition. Branch conditions drive a separate take_branch output, separating control information from the arithmetic result.</p></li>
        <li><h3>Register storage and operand selection</h3><p>Lab 3 integrated an eight-register, 16-bit register file with the ALU and two multiplexers. The source uses clocked writes with a write-enable signal, reset-to-zero behavior, and combinational reads. The multiplexers choose between register values, zero, and an immediate operand.</p><p>The integration test writes 12 and 17 into registers 2 and 3, reads them back, and routes both values through the ALU to produce 29.</p></li>
        <li><h3>Data memory and write-back</h3><p>Lab 4 added a Vivado memory IP core to a supplied top-level module and aligned its connections with the datapath. The ALU provides the memory address, a register output supplies write data, and a write-back multiplexer selects either the ALU result or memory output.</p><p>The VIO configuration was extended to control register writes, operand selection, memory writes, addresses, and write-back selection. Hardware sequences then exercised register-to-memory stores and memory-to-register loads.</p></li>
        <li><h3>Instruction and control integration</h3><p>The complete diagram connects PC logic, instruction memory, a Mapper, and an Instruction Decoder to the datapath controls. It also includes a branch-feedback path and debounced push-button clocking.</p><p className="content-placeholder">The final instruction encoding, decoder implementation, program examples, and complete-processor demonstration remain to be documented.</p></li>
      </ol>
    </section>
    <section id="processor-testing" className="case-study__section">
      <h2>From simulation to hardware checks</h2>
      <p>Labs 1–2 describe SystemVerilog testbenches, Vivado waveforms, and checks on the PYNQ board. Lab 3 documents register-file/ALU integration in simulation. Lab 4 explicitly used hardware testing without a separate simulation run.</p>
      <div className="study-table-wrap"><table className="study-table"><caption>Verification documented in the supplied reports</caption><thead><tr><th scope="col">Stage</th><th scope="col">Method and scope</th><th scope="col">Reported outcome</th></tr></thead><tbody>{evidence.map(([area, method, result]) => <tr key={area}><th scope="row">{area}</th><td>{method}</td><td>{result}</td></tr>)}</tbody></table></div>
      <h3>Original ALU simulation</h3>
      <figure className="case-study__diagram"><a href="/projects/processor/alu-waveform.png" target="_blank" rel="noreferrer"><Image src="/projects/processor/alu-waveform.png" alt="Original Lab 2 Vivado waveform showing ALU operands, operation selector, result, overflow, and branch output" width={1633} height={948} sizes="(max-width: 1200px) 90vw, 1180px" /></a><figcaption>Lab 2, page 8 · original simulation capture. <a href="/projects/processor/alu-waveform.png" target="_blank" rel="noreferrer">Inspect full-size waveform ↗</a></figcaption></figure>
      <h3>A hardware result from the adder stage</h3>
      <div className="content-grid"><figure className="case-study__diagram"><a href="/projects/processor/adder-hardware.jpg" target="_blank" rel="noreferrer"><Image src="/projects/processor/adder-hardware.jpg" alt="Original PYNQ-Z2 hardware test showing VIO inputs 0025 and 0045 and the board display result 006A" width={1536} height={2048} sizes="(max-width: 800px) 90vw, 550px" /></a><figcaption>Lab 1, page 6 · original hardware photograph. <a href="/projects/processor/adder-hardware.jpg" target="_blank" rel="noreferrer">Open full-size photograph ↗</a></figcaption></figure><div className="content-panel"><h3>0x0025 + 0x0045 = 0x006A</h3><p>The photograph shows both operands entered through Vivado VIO and the sum displayed on the board’s attached display. The report lists an overflow flag of 0 for this case.</p><p>A second reported vector, 0xA415 + 0xA555, produces 0x496A with overflow set to 1. Together, these cases illustrate checking both the numeric output and the signed-overflow flag.</p><p>These are adder-stage results. They do not establish execution of a full instruction program.</p></div></div>
    </section>
    <section id="processor-results" className="case-study__section">
      <h2>Technical challenges and approach</h2>
      <div className="content-grid">
        <div className="content-panel"><h3>Testing beyond the physical inputs</h3><p>Two 16-bit operands already require 32 input bits. The reports explain that the board did not provide enough physical inputs for these tests, so Vivado Virtual I/O supplied full-width values and exposed internal controls.</p></div>
        <div className="content-panel"><h3>Handling signed arithmetic and flags</h3><p>The ALU needed correct behavior for more than its result bus. The implementation separates signed-overflow detection, arithmetic shifting, and branch-condition outputs, with test vectors covering operation selection and unassigned codes.</p></div>
        <div className="content-panel"><h3>Coordinating data movement</h3><p>Register writes, ALU operand selection, memory addresses, and write-back selection must agree. Lab 4 addressed this with explicit control-value sequences for storing and retrieving values, followed by hardware checks.</p></div>
        <div className="content-panel"><h3>Learning from modular integration</h3><p>The reports trace a progression from a single arithmetic function to a connected system. Their conclusions emphasize the value of reusing the ALU across operations and extending the datapath with memory to store and retrieve data.</p></div>
      </div>
      <h3>Results and next steps</h3><p>The reports conclude that the adder and ALU matched expected outputs, demonstrate a register-file/ALU addition in simulation, and report correct data-memory hardware behavior. Full-processor program traces, timing, and resource utilization are still needed to document the final system’s verification.</p>
      <h3>Source material</h3><p>Based on the EECE 2323 Lab 1 report dated July 7, 2025; Lab 2 dated July 8, 2025; the Lab 3 register-file integration report; Lab 4 dated July 23, 2025; and the original processor datapath. Implementation details follow the included source code where the report prose differs. The scene at the top of this page is illustrative; the waveform and hardware photograph above are original report assets.</p>
    </section>
  </div>;
}
