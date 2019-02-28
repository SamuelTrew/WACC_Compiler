.data

msg_0:
	.word 82
	.ascii	"OverflowError: the result is too small/large to store in a 4-byte signed-integer.\n"
msg_1:
	.word 5
	.ascii	"%.*s\0"

.text

.global main
f_void:
	PUSH {lr}
	LDR r4, =0
	MOV r0, r4
	POP {pc}
	POP {pc}
	.ltorg
f_one:
	PUSH {lr}
	LDR r4, [sp, #4]
	MOV r0, r4
	POP {pc}
	POP {pc}
	.ltorg
f_two:
	PUSH {lr}
	LDR r4, [sp, #4]
	LDR r5, [sp, #8]
	ADDS r4, r4, r5
	BLVS p_throw_overflow_error
	MOV r0, r4
	POP {pc}
	POP {pc}
	.ltorg
f_three:
	PUSH {lr}
	LDR r4, [sp, #4]
	LDR r5, [sp, #8]
	LDR r6, [sp, #12]
	SMULL r5, r6, r5, r6
	CMP r6, r5, ASR #31
	BLNE p_throw_overflow_error
	ADDS r4, r4, r5
	BLVS p_throw_overflow_error
	MOV r0, r4
	POP {pc}
	POP {pc}
	.ltorg
main:
	PUSH {lr}
	SUB sp, sp, #16
	BL f_void
	MOV r4, r0
	STR r4, [sp, #12]
	LDR r4, =0
	STR r4, [sp, #-4]!
	BL f_one
	ADD sp, sp, #4
	MOV r4, r0
	STR r4, [sp, #8]
	LDR r4, =2
	STR r4, [sp, #-4]!
	LDR r4, =1
	STR r4, [sp, #-4]!
	BL f_two
	ADD sp, sp, #8
	MOV r4, r0
	STR r4, [sp, #4]
	LDR r4, =5
	STR r4, [sp, #-4]!
	LDR r4, =4
	STR r4, [sp, #-4]!
	LDR r4, =3
	STR r4, [sp, #-4]!
	BL f_three
	ADD sp, sp, #12
	MOV r4, r0
	STR r4, [sp]
	LDR r4, =0
	MOV r0, r4
	BL exit
	ADD sp, sp, #16
	LDR r0, =0
	POP {pc}
	.ltorg
p_throw_overflow_error:
	LDR r0, =msg_0
	BL p_throw_runtime_error
p_throw_runtime_error:
	BL p_print_string
	MOV r0, #-1
	BL exit
p_print_string:
	PUSH {lr}
	LDR r1, [r0]
	ADD r2, r0, #4
	LDR r0, =msg_1
	ADD r0, r0, #4
	BL printf
	MOV r0, #0
	BL fflush
	POP {pc}
