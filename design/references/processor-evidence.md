# Processor case-study evidence

Updated October 10, 2026. Course, instructor, term, and individual ownership were confirmed directly by Justin. No personal debugging anecdote is inferred from the reports.

## Implementation and testing sources
- Justin Ho Lab 1 Report.pdf: EECE 2323, July 7, 2025. 16-bit adder, overflow equation, test vectors, Vivado simulation, and hardware verification.
- Justin Ho Lab 2 Report.pdf: EECE 2323, July 8, 2025. ALU source, testbench, simulation, and VIO hardware testing. Source code is used for operation behavior where prose is inconsistent: addition is select 0000, and branch checks compare operand a to zero.
- Lab 3 Report.pdf: EECE 2323 register-file integration. Source lists eight 16-bit registers, clocked writes and combinational reads. Test sequence writes 12 and 17 to registers 2 and 3 and adds them to produce 29. This supports a component integration result, not a full-program claim.
- Justin Ho Lab 4 Report.pdf: EECE 2323, July 23, 2025. Memory IP integration, VIO setup, register/memory control sequences, and hardware testing. The report explicitly says no simulation was run for this stage. Tables contain inconsistencies, so individual memory vector outcomes are not recreated as an independently checked result table.
- Original riscv-datapath.png: final architecture connections; does not establish instruction encoding or full ISA compatibility.

## Original assets
- public/projects/processor/alu-waveform.png: unchanged embedded image from Lab 2 PDF, page 8, first image. Waveform shows operands, selector, result and flags.
- public/projects/processor/adder-hardware.jpg: unchanged embedded photograph from Lab 1 PDF, page 6, first image. Visible PYNQ-Z2 / Zynq-7020 labels, VIO values 0025 and 0045, and display 006A.

No source reports are published or modified. Original assets were extracted from PDFs in Downloads. Component tests remain distinguished from complete-processor execution. Timing/resource utilization and final instruction programs remain undocumented.
