.data

msg_0:
	.word 7
	.ascii	"Correct"
msg_1:
	.word 5
	.ascii	"Wrong"
msg_2:
	.word 82
	.ascii	"OverflowError: the result is too small/large to store in a 4-byte signed-integer.\n"
msg_3:
	.word 5
	.ascii	"%.*s\0"
msg_4:
	.word 1
	.ascii	"\0"

.text

.global main
main:
	PUSH {lr}
	SUB sp, sp, #4
	LDR r4, =10
	LDR r5, =1
	SMULL r4, r5, r4, r5
	CMP r5, r4, ASR #31
	BLNE p_throw_overflow_error
	LDR r5, =2
	LDR r6, =15
	SMULL r5, r6, r5, r6
	CMP r6, r5, ASR #31
	BLNE p_throw_overflow_error
	ADDS r4, r4, r5
	BLVS p_throw_overflow_error
	STR r4, [sp]
	LDR r4, [sp]
	LDR r5, =40
	CMP r4, r5
	MOVEQ r4, #1
	MOVNE r4, #0
	CMP r4, #0
	BEQ L0
	LDR r4, =msg_0
	MOV r0, r4
	BL p_print_string
	BL p_print_ln
	B L1
L0:
	LDR r4, =msg_1
	MOV r0, r4
	BL p_print_string
	BL p_print_ln
L1:
	ADD sp, sp, #4
	LDR r0, =0
	POP {pc}
	.ltorg
p_throw_overflow_error:
	LDR r0, =msg_2
	BL p_throw_runtime_error
p_print_string:
	PUSH {lr}
	LDR r1, [r0]
	ADD r2, r0, #4
	LDR r0, =msg_3
	ADD r0, r0, #4
	BL printf
	MOV r0, #0
	BL fflush
	POP {pc}
p_print_ln:
	PUSH {lr}
	LDR r0, =msg_4
	ADD r0, r0, #4
	BL puts
	MOV r0, #0
	BL fflush
	POP {pc}
p_throw_runtime_error:
	BL p_print_string
	MOV r0, #-1
	BL exit
